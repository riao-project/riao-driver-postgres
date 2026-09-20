import {
	DatabaseFunctions,
	DatabaseQueryBuilder,
	Expression,
	SelectQuery,
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

	public override day(fn: DatabaseFunction) {
		this.sql.append('DATE_PART(\'day\', ');

		if (fn.params?.expr) {
			this.expression(fn.params.expr);
		}
		else {
			this.expression(DatabaseFunctions.currentTimestamp());
		}

		this.sql.closeParens();

		return this;
	}

	public override month(fn: DatabaseFunction) {
		this.sql.append('DATE_PART(\'month\', ');

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

	public override concat(fn: DatabaseFunction): this {
		const expr = fn.params?.expr ?? [];

		// Postgres doesn't handle CONCAT well with parameterized queries and type inference
		// Use the || (concatenation) operator instead
		if (expr.length === 0) {
			this.sql.append("''");
		}
		else if (expr.length === 1) {
			this.expression(expr[0]);
		}
		else {
			this.sql.append('(');
			for (let i = 0; i < expr.length; i++) {
				this.expression(expr[i]);

				if (i < expr.length - 1) {
					this.sql.append(' || ');
				}
			}
			this.sql.append(')');
		}

		return this;
	}

}
