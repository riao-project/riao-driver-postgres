import { Postgres13DataDefinitionBuilder } from './ddl-builder-postgres-13';
import { Postgres12Driver } from './driver-postgres-12';
import { Postgres13QueryBuilder } from './query-builder-postgres-13';
import { Postgres13SchemaQueryRepository } from './schema-query-repository-13';

export class Postgres13Driver extends Postgres12Driver {
	dataDefinitionBuilder = Postgres13DataDefinitionBuilder;
	queryBuilder = Postgres13QueryBuilder;
	schemaQueryRepository = Postgres13SchemaQueryRepository;
}
