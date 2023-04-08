import 'jasmine';
import { Postgres15Driver } from '../../src';
import { connectionOptionsPostgres15 } from '../connection-options';
import { test } from 'riao-driver-test/src';

test({
	name: 'Postgres 15',
	driver: Postgres15Driver,
	expectedVersion: /^15\.[0-9]+$/,
	connectionOptions: connectionOptionsPostgres15,
});
