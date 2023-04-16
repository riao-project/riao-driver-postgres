import {
	ColumnOptions,
	ColumnType,
	DataDefinitionBuilder,
	GrantOptions,
} from 'riao-dbal/src';
import { ChangeColumnOptions } from 'riao-dbal/src/ddl/alter-table';

export class PostgresDataDefinitionBuilder extends DataDefinitionBuilder {
	public getAutoIncrement(): string {
		return '';
	}

	public createTableColumn(column: ColumnOptions): string {
		if ('autoIncrement' in column && column.autoIncrement) {
			column.autoIncrement = false;

			if (column.type === ColumnType.SMALLINT) {
				column.type = <any>ColumnType.SMALLSERIAL;
			}
			else if (column.type === ColumnType.INT) {
				column.type = <any>ColumnType.SERIAL;
			}
			else if (column.type === ColumnType.BIGINT) {
				column.type = <any>ColumnType.BIGSERIAL;
			}
		}

		return super.createTableColumn(column);
	}

	public changeColumn(options: ChangeColumnOptions): this {
		// Rename column first, if required
		if (options.column !== options.options.name) {
			this.sql +=
				`ALTER TABLE ${options.table} ` +
				`RENAME COLUMN ${options.column} TO ` +
				`${options.options.name};`;
		}

		options.column = '';
		options.options.name += ' TYPE ';

		return super.changeColumn(options);
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
				this.sql += 'ALTER USER ' + user + ' ';
				this.sql += 'WITH SUPERUSER; ';
			}

			return this;
		}

		return super.grant(options);
	}
}