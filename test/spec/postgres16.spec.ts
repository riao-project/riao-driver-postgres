import 'jasmine';
import { DatabasePostgres16 } from '../../src';
import { connectionOptionsPostgres16 } from '../connection-options';
import { test } from '@riao/driver-test';
import { env } from '../env';

test({
	name: 'Postgres 16',
	db: DatabasePostgres16,
	expectedVersion: /^16\.[0-9]+$/,
	connectionOptions: connectionOptionsPostgres16,
	rootDatabase: env.TEST_POSTGRES16_ROOT_DATABASE,
});
