import 'jasmine';
import { Postgres13Driver } from '../../src';
import { connectionOptionsPostgres13 } from '../connection-options';
import { test } from 'riao-driver-test/src';

test({
	name: 'Postgres 13',
	driver: Postgres13Driver,
	expectedVersion: /^13\.[0-9]+$/,
	connectionOptions: connectionOptionsPostgres13,
});
