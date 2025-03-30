import {
	ColumnOptions,
	ColumnType,
	DataDefinitionBuilder,
	GrantOptions,
	TriggerOptions,
} from '@riao/dbal';
import { ChangeColumnOptions } from '@riao/dbal/ddl/alter-table';
import { PostgresSqlBuilder } from './sql-builder';
import { PostgresQueryBuilder } from './query-builder';

export class PostgresDataDefinitionBuilder extends DataDefinitionBuilder {
	protected queryBuilderType = PostgresQueryBuilder;

	public constructor() {
		super();

		this.columnTypes = <any>{
			...this.columnTypes,
			TINYINT: 'SMALLINT',
			DOUBLE: 'REAL',
			TIMESTAMP: 'TIMESTAMPTZ',
			BLOB: 'BYTEA',
			SMALLSERIAL: 'SMALLSERIAL',
			SERIAL: 'SERIAL',
			BIGSERIAL: 'BIGSERIAL',
		};
	}

	public getSqlType() {
		return PostgresSqlBuilder;
	}

	public disableForeignKeyChecks(): this {
		this.sql.append('SET session_replication_role = \'replica\'');

		return this;
	}

	public enableForeignKeyChecks(): this {
		this.sql.append('SET session_replication_role = \'origin\';');

		return this;
	}

	public columnAutoIncrement() {
		return this;
	}

	public createTableColumn(column: ColumnOptions) {
		if ('autoIncrement' in column && column.autoIncrement) {
			if (column.type === ColumnType.TINYINT) {
				column.type = <any>'SMALLSERIAL';
			}
			else if (column.type === ColumnType.SMALLINT) {
				column.type = <any>'SMALLSERIAL';
			}
			else if (column.type === ColumnType.INT) {
				column.type = <any>'SERIAL';
			}
			else if (column.type === ColumnType.BIGINT) {
				column.type = <any>'BIGSERIAL';
			}
		}

		return super.createTableColumn(column);
	}

	public changeColumn(options: ChangeColumnOptions): this {
		let newColumnName = options.column;

		// Rename column first, if required
		if (options.column !== options.options.name) {
			this.alterTableStatement(options.table);

			this.sql.append('RENAME COLUMN ');
			this.sql.columnName(options.column);
			this.sql.append(' TO ');
			this.sql.columnName(options.options.name);
			this.sql.append(';');

			newColumnName = options.options.name;
		}

		this.alterTableStatement(options.table);
		this.alterColumnStatement(newColumnName);

		this.sql.append(' TYPE ');

		this.createTableColumn({ ...options.options, name: '' });

		return this;
	}

	public grant(options: GrantOptions): this {
		if (!Array.isArray(options.privileges)) {
			options.privileges = [options.privileges];
		}

		if (!Array.isArray(options.to)) {
			options.to = [options.to];
		}

		if (options.privileges.includes('ALL') && options.on === '*') {
			for (const user of options.to) {
				this.sql.append('ALTER USER ' + user + ' ');
				this.sql.append('WITH SUPERUSER; ');
			}

			return this;
		}

		return super.grant(options);
	}

	public override createTrigger(options: TriggerOptions): this {
		if (!options.name) {
			options.name = this.getTriggerName(options);
		}

		const functionName = options.name + '_func()';

		this.sql.append('CREATE OR REPLACE FUNCTION ');
		this.sql.append(functionName);
		this.sql.space();

		this.createTriggerBody(options.body);
		this.sql.space();

		this.createTriggerStatement();
		this.sql.append(options.name + ' ');
		this.createTriggerTableEvent(options);
		this.createTriggerForEachRow();
		this.sql.append('EXECUTE FUNCTION ' + functionName);

		this.sql.endStatement();

		return this;
	}

	public override createTriggerBeginStatement(): this {
		this.sql.append('RETURNS TRIGGER AS $$ BEGIN ');

		return this;
	}

	public override createTriggerEndStatement(): this {
		this.sql.append(' RETURN NEW; END; $$ LANGUAGE plpgsql;');

		return this;
	}

	public override dropTriggerName(options: {
		name: string;
		table: string;
	}): this {
		this.sql.columnName(options.name);
		this.sql.append(' ON ');
		this.sql.tableName(options.table);

		return this;
	}
}
