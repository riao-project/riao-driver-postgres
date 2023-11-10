import { DatabaseQueryBuilder } from '@riao/dbal';
import { PostgresSqlBuilder } from './sql-builder';

export class PostgresQueryBuilder extends DatabaseQueryBuilder {
	public getSqlType() {
		return PostgresSqlBuilder;
	}

	public insertReturning(primaryKey: string): this {
		this.sql.append(` RETURNING ${primaryKey}`);

		return this;
	}
}
