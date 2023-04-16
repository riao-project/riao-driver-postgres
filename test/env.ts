import { AppConfig, configure } from 'ts-appconfig';

/**
 * Environment Variables Schema
 */
export class Environment extends AppConfig {
	readonly APP_TITLE = 'typescript-template-library';

	readonly TEST_POSTGRES12_HOST = 'localhost';
	readonly TEST_POSTGRES12_PORT = 5432;
	readonly TEST_POSTGRES12_USERNAME = 'riaouser';
	readonly TEST_POSTGRES12_PASSWORD = 'password1234';
	readonly TEST_POSTGRES12_DATABASE = 'riaodb';
	readonly TEST_POSTGRES12_ROOT_USERNAME = 'riao_root';
	readonly TEST_POSTGRES12_ROOT_PASSWORD = 'password1234';
	readonly TEST_POSTGRES12_ROOT_DATABASE = 'db';

	readonly TEST_POSTGRES13_HOST = 'localhost';
	readonly TEST_POSTGRES13_PORT = 5433;
	readonly TEST_POSTGRES13_USERNAME = 'riaouser';
	readonly TEST_POSTGRES13_PASSWORD = 'password1234';
	readonly TEST_POSTGRES13_DATABASE = 'riaodb';
	readonly TEST_POSTGRES13_ROOT_USERNAME = 'riao_root';
	readonly TEST_POSTGRES13_ROOT_PASSWORD = 'password1234';
	readonly TEST_POSTGRES13_ROOT_DATABASE = 'db';

	readonly TEST_POSTGRES14_HOST = 'localhost';
	readonly TEST_POSTGRES14_PORT = 5434;
	readonly TEST_POSTGRES14_USERNAME = 'riaouser';
	readonly TEST_POSTGRES14_PASSWORD = 'password1234';
	readonly TEST_POSTGRES14_DATABASE = 'riaodb';
	readonly TEST_POSTGRES14_ROOT_USERNAME = 'riao_root';
	readonly TEST_POSTGRES14_ROOT_PASSWORD = 'password1234';
	readonly TEST_POSTGRES14_ROOT_DATABASE = 'db';

	readonly TEST_POSTGRES15_HOST = 'localhost';
	readonly TEST_POSTGRES15_PORT = 5435;
	readonly TEST_POSTGRES15_USERNAME = 'riaouser';
	readonly TEST_POSTGRES15_PASSWORD = 'password1234';
	readonly TEST_POSTGRES15_DATABASE = 'riaodb';
	readonly TEST_POSTGRES15_ROOT_USERNAME = 'riao_root';
	readonly TEST_POSTGRES15_ROOT_PASSWORD = 'password1234';
	readonly TEST_POSTGRES15_ROOT_DATABASE = 'db';
}

/**
 * Load & export environment variables
 */
export const env: Environment = configure(Environment);
