import { Database } from 'riao-dbal/src/database';
import { Postgres12Driver } from './driver-postgres-12';
import { DatabaseEnvPostgres12 } from './env-postgres-12';

export class DatabasePostgres12 extends Database {
	driverType = Postgres12Driver;
	envType = DatabaseEnvPostgres12;
}