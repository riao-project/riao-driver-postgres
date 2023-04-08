import 'jasmine';
import { DatabasePostgres13 } from '../../src';
import { connectionOptionsPostgres13 } from '../connection-options';
import { test } from 'riao-driver-test/src';

test({
	name: 'Postgres 13',
	db: DatabasePostgres13,
	expectedVersion: /^13\.[0-9]+$/,
	connectionOptions: connectionOptionsPostgres13,
});
