import { Database } from 'riao-dbal/src/database';
import { Postgres14Driver } from './driver-postgres-14';
import { DatabaseEnvPostgres14 } from './env-postgres-14';
import { Postgres14SchemaQueryRepository } from './schema-query-repository-14';

export class DatabasePostgres14 extends Database {
	driverType = Postgres14Driver;
	envType = DatabaseEnvPostgres14;
	schemaQuery: Postgres14SchemaQueryRepository;
}
