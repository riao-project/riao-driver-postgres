import { SqlBuilder } from '@riao/dbal/builder';

export class PostgresSqlBuilder extends SqlBuilder {
	protected placeHolderId = 1;

	public operators = {
		...this.operators,
		like: 'ILIKE',
	};

	public appendPlaceholder(): this {
		// postgres uses incrementing placeholders in the format $1, $2,...
		this.sql += `\$${this.placeHolderId} `;
		this.placeHolderId++;

		return this;
	}
}
