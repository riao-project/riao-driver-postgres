import 'jasmine';
import { DatabasePostgres12 } from '../../src';
import { connectionOptionsPostgres12 } from '../connection-options';
import { test } from 'riao-driver-test/src';
import { env } from '../env';

test({
	name: 'Postgres 12',
	db: DatabasePostgres12,
	expectedVersion: /^12\.[0-9]+$/,
	connectionOptions: connectionOptionsPostgres12,
	rootUsername: env.TEST_POSTGRES12_ROOT_USERNAME,
	rootPassword: env.TEST_POSTGRES12_ROOT_PASSWORD,
	rootDatabase: env.TEST_POSTGRES12_ROOT_DATABASE,
});