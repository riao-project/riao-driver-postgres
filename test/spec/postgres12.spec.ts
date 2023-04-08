import 'jasmine';
import { DatabasePostgres12 } from '../../src';
import { connectionOptionsPostgres12 } from '../connection-options';
import { test } from 'riao-driver-test/src';

test({
	name: 'Postgres 12',
	db: DatabasePostgres12,
	expectedVersion: /^12\.[0-9]+$/,
	connectionOptions: connectionOptionsPostgres12,
});
