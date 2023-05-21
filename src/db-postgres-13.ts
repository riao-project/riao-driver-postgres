import { Database } from 'riao-dbal/src/database';
import { Postgres13Driver } from './driver-postgres-13';
import { DatabaseEnvPostgres13 } from './env-postgres-13';
import { Postgres13SchemaQueryRepository } from './schema-query-repository-13';

export class DatabasePostgres13 extends Database {
	driverType = Postgres13Driver;
	envType = DatabaseEnvPostgres13;
	schemaQuery: Postgres13SchemaQueryRepository;
}
