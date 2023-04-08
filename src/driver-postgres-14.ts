import { Postgres14DataDefinitionBuilder } from './ddl-builder-postgres-14';
import { Postgres13Driver } from './driver-postgres-13';
import { Postgres14QueryBuilder } from './query-builder-postgres-14';

export class Postgres14Driver extends Postgres13Driver {
	dataDefinitionBuilder = Postgres14DataDefinitionBuilder;
	queryBuilder = Postgres14QueryBuilder;
}
