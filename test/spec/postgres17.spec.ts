import 'jasmine';
import { DatabasePostgres17 } from '../../src';
import { connectionOptionsPostgres17 } from '../connection-options';
import { test } from '@riao/driver-test';
import { env } from '../env';

test({
	name: 'Postgres 17',
	db: DatabasePostgres17,
	expectedVersion: /^17\.[0-9]+$/,
	connectionOptions: connectionOptionsPostgres17,
	rootDatabase: env.TEST_POSTGRES17_ROOT_DATABASE,
});
