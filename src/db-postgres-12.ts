import { Database } from '@riao/dbal/database';
import { PostgresDriver } from './driver';
import { DatabaseEnvPostgres } from './env';
import { PostgresSchemaQueryRepository } from './schema-query-repository';
import { PostgresDataDefinitionBuilder } from './ddl-builder';
import { PostgresQueryBuilder } from './query-builder';

export class DatabasePostgres12 extends Database {
	driverType = PostgresDriver;
	envType = DatabaseEnvPostgres;

	ddlBuilderType = PostgresDataDefinitionBuilder;
	queryBuilderType = PostgresQueryBuilder;
	schemaQueryRepositoryType = PostgresSchemaQueryRepository;
}
