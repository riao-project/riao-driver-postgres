import 'jasmine';
import { DatabasePostgres14 } from '../../src';
import { connectionOptionsPostgres14 } from '../connection-options';
import { test } from 'riao-driver-test/src';
import { env } from '../env';

test({
	name: 'Postgres 14',
	db: DatabasePostgres14,
	expectedVersion: /^14\.[0-9]+$/,
	connectionOptions: connectionOptionsPostgres14,
	rootDatabase: env.TEST_POSTGRES14_ROOT_DATABASE,
});
