import { AppConfig, configure } from 'ts-appconfig';

/**
 * Environment Variables Schema
 */
export class Environment extends AppConfig {
	readonly APP_TITLE = 'typescript-template-library';

	readonly TEST_POSTGRES12_HOST = 'localhost';
	readonly TEST_POSTGRES12_PORT = 5432;
	readonly TEST_POSTGRES12_USERNAME = 'riao';
	readonly TEST_POSTGRES12_PASSWORD = 'password1234';
	readonly TEST_POSTGRES12_DATABASE = 'riao';

	readonly TEST_POSTGRES13_HOST = 'localhost';
	readonly TEST_POSTGRES13_PORT = 5433;
	readonly TEST_POSTGRES13_USERNAME = 'riao';
	readonly TEST_POSTGRES13_PASSWORD = 'password1234';
	readonly TEST_POSTGRES13_DATABASE = 'riao';
}

/**
 * Load & export environment variables
 */
export const env: Environment = configure(Environment);