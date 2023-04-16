import 'jasmine';
import { DatabasePostgres13 } from '../../src';
import { connectionOptionsPostgres13 } from '../connection-options';
import { test } from 'riao-driver-test/src';
import { env } from '../env';

test({
	name: 'Postgres 13',
	db: DatabasePostgres13,
	expectedVersion: /^13\.[0-9]+$/,
	connectionOptions: connectionOptionsPostgres13,
	rootUsername: env.TEST_POSTGRES13_ROOT_USERNAME,
	rootPassword: env.TEST_POSTGRES13_ROOT_PASSWORD,
	rootDatabase: env.TEST_POSTGRES13_ROOT_DATABASE,
});
