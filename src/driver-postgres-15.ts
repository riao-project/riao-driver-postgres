import { Postgres15DataDefinitionBuilder } from './ddl-builder-postgres-15';
import { Postgres14Driver } from './driver-postgres-14';
import { Postgres15QueryBuilder } from './query-builder-postgres-15';

export class Postgres15Driver extends Postgres14Driver {
	dataDefinitionBuilder = Postgres15DataDefinitionBuilder;
	queryBuilder = Postgres15QueryBuilder;
}
