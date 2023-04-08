import { PostgresConnectionOptions } from '../src';
import { env } from './env';

export const connectionOptionsPostgres12: PostgresConnectionOptions = {
	host: env.TEST_POSTGRES12_HOST,
	port: env.TEST_POSTGRES12_PORT,
	database: env.TEST_POSTGRES12_DATABASE,
	username: env.TEST_POSTGRES12_USERNAME,
	password: env.TEST_POSTGRES12_PASSWORD,
};

export const connectionOptionsPostgres13: PostgresConnectionOptions = {
	host: env.TEST_POSTGRES13_HOST,
	port: env.TEST_POSTGRES13_PORT,
	database: env.TEST_POSTGRES13_DATABASE,
	username: env.TEST_POSTGRES13_USERNAME,
	password: env.TEST_POSTGRES13_PASSWORD,
};
