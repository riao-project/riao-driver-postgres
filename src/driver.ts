import { Pool, types } from 'pg';

import {
	DatabaseConnectionOptions,
	DatabaseDriver,
	DatabaseQueryResult,
	DatabaseQueryTypes,
} from '@riao/dbal';

export type PostgresConnectionOptions = DatabaseConnectionOptions;

const dateTypes = [types.builtins.DATE, types.builtins.TIMESTAMPTZ];

for (const type of dateTypes) {
	types.setTypeParser(type, (val) => new Date(val));
}

export class PostgresDriver extends DatabaseDriver {
	protected conn: Pool;

	public async connect(options: PostgresConnectionOptions): Promise<this> {
		this.conn = new Pool({
			host: options.host,
			port: options.port,
			database: options.database,
			user: options.username,
			password: options.password,
		});

		return this;
	}

	public async disconnect(): Promise<void> {
		await this.conn.end();
	}

	public async query(
		options: DatabaseQueryTypes
	): Promise<DatabaseQueryResult> {
		let { sql, params } = this.toDatabaseQueryOptions(options);
		params = params ?? [];

		try {
			const { rows, fields } = await this.conn.query(sql, params);

			return {
				results: Array.isArray(rows) ? rows : [rows],
			};
		}
		catch (e) {
			e.message += ' ' + JSON.stringify({ sql, params });

			throw e;
		}
	}

	public async getVersion(): Promise<string> {
		const { results } = await this.query({
			sql: 'SELECT version()',
		});

		const version = results[0]?.version?.match(/PostgreSQL ([0-9\.]+)/);

		if (version?.length) {
			return version[1];
		}

		return null;
	}
}
