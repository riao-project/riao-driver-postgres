import {
	ColumnOptions,
	ColumnType,
	DataDefinitionBuilder,
	GrantOptions,
} from '@riao/dbal';
import { ChangeColumnOptions } from '@riao/dbal/ddl/alter-table';
import { PostgresSqlBuilder } from './sql-builder';

export class PostgresDataDefinitionBuilder extends DataDefinitionBuilder {
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
}
