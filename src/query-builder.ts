import { DatabaseQueryBuilder } from 'riao-dbal/src';

export class PostgresQueryBuilder extends DatabaseQueryBuilder {
	protected placeHolderId = 1;

	public appendPlaceholder(): this {
		// postgres uses incrementing placeholders in the format $1, $2,...
		this.sql += `\$${this.placeHolderId} `;
		this.placeHolderId++;

		return this;
	}

	public insertReturning(primaryKey: string): this {
		this.sql += ` RETURNING ${primaryKey}`;

		return this;
	}
}
