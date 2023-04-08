import 'jasmine';
import { Postgres12Driver } from '../../src';
import { connectionOptionsPostgres12 } from '../connection-options';
import { test } from 'riao-driver-test/src';

test({
	name: 'Postgres 12',
	driver: Postgres12Driver,
	expectedVersion: /^12\.[0-9]+$/,
	connectionOptions: connectionOptionsPostgres12,
});
