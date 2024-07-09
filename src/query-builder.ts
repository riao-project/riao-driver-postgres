import { DatabaseFunctions, DatabaseQueryBuilder } from '@riao/dbal';
import { PostgresSqlBuilder } from './sql-builder';
import { DatabaseFunction } from '@riao/dbal/functions/function-token';

export class PostgresQueryBuilder extends DatabaseQueryBuilder {
	public getSqlType() {
		return PostgresSqlBuilder;
	}

	public insertReturning(primaryKey: string): this {
		this.sql.append(` RETURNING ${primaryKey}`);

		return this;
	}

	public uuid(): this {
		this.sql.append('gen_random_uuid()');

		return this;
	}

	public override year(fn: DatabaseFunction) {
		this.sql.append('DATE_PART(\'year\', ');

		if (fn.params?.expr) {
			this.expression(fn.params.expr);
		}
		else {
			this.expression(DatabaseFunctions.currentTimestamp());
		}

		this.sql.closeParens();

		return this;
	}
}
