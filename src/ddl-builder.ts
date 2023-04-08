import {
	ColumnOptions,
	ColumnType,
	DataDefinitionBuilder,
} from 'riao-dbal/src';

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
}
