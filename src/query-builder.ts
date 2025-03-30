import {
	DatabaseFunctions,
	DatabaseQueryBuilder,
	Expression,
} from '@riao/dbal';
import { PostgresSqlBuilder } from './sql-builder';
import { DatabaseFunction } from '@riao/dbal/functions/function-token';
import { SetOptions } from '@riao/dbal/dml/set-options';

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

	public override setStatement(): this {
		return this;
	}

	public override setColumn(options: SetOptions): this {
		this.sql.append(options.column);
		this.sql.append(' = ');
		this.expression(options.value);

		return this;
	}
}
