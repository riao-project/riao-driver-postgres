import 'jasmine';
import { DatabasePostgres18 } from '../../src';
import { connectionOptionsPostgres18 } from '../connection-options';
import { test } from '@riao/driver-test';
import { env } from '../env';

test({
	name: 'Postgres 18',
	db: DatabasePostgres18,
	expectedVersion: /^18\.[0-9]+$/,
	connectionOptions: connectionOptionsPostgres18,
	rootDatabase: env.TEST_POSTGRES18_ROOT_DATABASE,
});
