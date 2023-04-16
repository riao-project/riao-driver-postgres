import 'jasmine';
import { DatabasePostgres15 } from '../../src';
import { connectionOptionsPostgres15 } from '../connection-options';
import { test } from 'riao-driver-test/src';
import { env } from '../env';

test({
	name: 'Postgres 15',
	db: DatabasePostgres15,
	expectedVersion: /^15\.[0-9]+$/,
	connectionOptions: connectionOptionsPostgres15,
	rootUsername: env.TEST_POSTGRES15_ROOT_USERNAME,
	rootPassword: env.TEST_POSTGRES15_ROOT_PASSWORD,
	rootDatabase: env.TEST_POSTGRES15_ROOT_DATABASE,
});
