import { Database } from 'riao-dbal/src/database';
import { Postgres15Driver } from './driver-postgres-15';
import { DatabaseEnvPostgres15 } from './env-postgres-15';

export class DatabasePostgres15 extends Database {
	driverType = Postgres15Driver;
	envType = DatabaseEnvPostgres15;
}
