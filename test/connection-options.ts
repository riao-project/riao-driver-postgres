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

export const connectionOptionsPostgres14: PostgresConnectionOptions = {
	host: env.TEST_POSTGRES14_HOST,
	port: env.TEST_POSTGRES14_PORT,
	database: env.TEST_POSTGRES14_DATABASE,
	username: env.TEST_POSTGRES14_USERNAME,
	password: env.TEST_POSTGRES14_PASSWORD,
};

export const connectionOptionsPostgres15: PostgresConnectionOptions = {
	host: env.TEST_POSTGRES15_HOST,
	port: env.TEST_POSTGRES15_PORT,
	database: env.TEST_POSTGRES15_DATABASE,
	username: env.TEST_POSTGRES15_USERNAME,
	password: env.TEST_POSTGRES15_PASSWORD,
};
