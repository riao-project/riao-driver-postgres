import 'jasmine';
import { DatabasePostgres13 } from '../../src';
import { connectionOptionsPostgres13 } from '../connection-options';
import { test } from '@riao/driver-test';
import { env } from '../env';

test({
	name: 'Postgres 13',
	db: DatabasePostgres13,
	expectedVersion: /^13\.[0-9]+$/,
	connectionOptions: connectionOptionsPostgres13,
	rootDatabase: env.TEST_POSTGRES13_ROOT_DATABASE,
});
