import 'jasmine';
import { Postgres14Driver } from '../../src';
import { connectionOptionsPostgres14 } from '../connection-options';
import { test } from 'riao-driver-test/src';

test({
	name: 'Postgres 14',
	driver: Postgres14Driver,
	expectedVersion: /^14\.[0-9]+$/,
	connectionOptions: connectionOptionsPostgres14,
});
