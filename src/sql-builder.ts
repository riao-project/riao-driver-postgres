import { SqlBuilder } from '@riao/dbal/builder';

export class PostgresSqlBuilder extends SqlBuilder {
	protected placeHolderId = 1;

	public operators = {
		...this.operators,
		like: 'ILIKE',
	};

	public appendPlaceholder(value: any): this {
		let type = '';
		const isNumber = typeof value === 'number';

		if (isNumber && Number.isInteger(value)) {
			type = '::int';
		}
		else if (isNumber) {
			type = '::numeric';
		}

		// postgres uses incrementing placeholders in the format $1, $2,...
		this.sql += `\$${this.placeHolderId}${type} `;
		this.placeHolderId++;

		return this;
	}
}
