import { DatabaseRecord, SchemaQueryRepository } from '@riao/dbal';

export class PostgresSchemaQueryRepository extends SchemaQueryRepository {
	protected databaseNameColumn = 'table_catalog';
	protected tableNameColumn = 'table_name';
	protected tableTypeColumn = 'table_type';
	protected columnNameColumn = 'column_name';
	protected columnTypeColumn = 'data_type';
	protected columnPositionColumn = 'ordinal_position';

	public getTablesQueryWhere() {
		return {
			...super.getTablesQueryWhere(),
			table_schema: 'public',
		};
	}

	public async getPrimaryKeyQuery(
		table: string
	): Promise<null | DatabaseRecord> {
		const sql = `SELECT cols.${this.columnNameColumn}
			FROM information_schema.table_constraints table_constraints
			JOIN information_schema.constraint_column_usage AS constraint_col_usage USING (constraint_schema, constraint_name) 
			JOIN information_schema.columns AS cols ON cols.table_schema = table_constraints.constraint_schema
			AND table_constraints.table_name = cols.table_name AND constraint_col_usage.column_name = cols.${this.columnNameColumn}
			WHERE constraint_type = 'PRIMARY KEY' and table_constraints.table_name = $1`;

		const params = [table];

		let results = (await this.driver.query({ sql, params })).results;

		results = results.map((result) => ({
			[this.columnNameColumn]:
				result[this.columnNameColumn.toLowerCase()],
		}));

		return results.length ? results[0] : null;
	}
}
