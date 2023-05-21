import { Postgres12DataDefinitionBuilder } from './ddl-builder-postgres-12';
import { PostgresDriver } from './driver';
import { Postgres12QueryBuilder } from './query-builder-postgres-12';
import { Postgres12SchemaQueryRepository } from './schema-query-repository-12';

export class Postgres12Driver extends PostgresDriver {
	dataDefinitionBuilder = Postgres12DataDefinitionBuilder;
	queryBuilder = Postgres12QueryBuilder;
	schemaQueryRepository = Postgres12SchemaQueryRepository;
}
