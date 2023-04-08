import 'jasmine';
import { DatabasePostgres15 } from '../../src';
import { connectionOptionsPostgres15 } from '../connection-options';
import { test } from 'riao-driver-test/src';

test({
	name: 'Postgres 15',
	db: DatabasePostgres15,
	expectedVersion: /^15\.[0-9]+$/,
	connectionOptions: connectionOptionsPostgres15,
});
