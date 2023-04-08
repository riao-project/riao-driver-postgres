import 'jasmine';
import { DatabasePostgres14 } from '../../src';
import { connectionOptionsPostgres14 } from '../connection-options';
import { test } from 'riao-driver-test/src';

test({
	name: 'Postgres 14',
	db: DatabasePostgres14,
	expectedVersion: /^14\.[0-9]+$/,
	connectionOptions: connectionOptionsPostgres14,
});
