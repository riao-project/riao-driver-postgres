import { AppConfig, configure } from 'ts-appconfig';

/**
 * Environment Variables Schema
 */
export class Environment extends AppConfig {
	readonly APP_TITLE = 'typescript-template-library';

	readonly TEST_POSTGRES12_HOST = '0.0.0.0';
	readonly TEST_POSTGRES12_PORT = 5432;
	readonly TEST_POSTGRES12_USERNAME = 'riao_root';
	readonly TEST_POSTGRES12_PASSWORD = 'password1234';
	readonly TEST_POSTGRES12_DATABASE = 'riaodb';
	readonly TEST_POSTGRES12_ROOT_DATABASE = 'db';

	readonly TEST_POSTGRES13_HOST = '0.0.0.0';
	readonly TEST_POSTGRES13_PORT = 5433;
	readonly TEST_POSTGRES13_USERNAME = 'riao_root';
	readonly TEST_POSTGRES13_PASSWORD = 'password1234';
	readonly TEST_POSTGRES13_DATABASE = 'riaodb';
	readonly TEST_POSTGRES13_ROOT_DATABASE = 'db';

	readonly TEST_POSTGRES14_HOST = '0.0.0.0';
	readonly TEST_POSTGRES14_PORT = 5434;
	readonly TEST_POSTGRES14_USERNAME = 'riao_root';
	readonly TEST_POSTGRES14_PASSWORD = 'password1234';
	readonly TEST_POSTGRES14_DATABASE = 'riaodb';
	readonly TEST_POSTGRES14_ROOT_DATABASE = 'db';

	readonly TEST_POSTGRES15_HOST = '0.0.0.0';
	readonly TEST_POSTGRES15_PORT = 5435;
	readonly TEST_POSTGRES15_USERNAME = 'riao_root';
	readonly TEST_POSTGRES15_PASSWORD = 'password1234';
	readonly TEST_POSTGRES15_DATABASE = 'riaodb';
	readonly TEST_POSTGRES15_ROOT_DATABASE = 'db';

	readonly TEST_POSTGRES16_HOST = '0.0.0.0';
	readonly TEST_POSTGRES16_PORT = 5436;
	readonly TEST_POSTGRES16_USERNAME = 'riao_root';
	readonly TEST_POSTGRES16_PASSWORD = 'password1234';
	readonly TEST_POSTGRES16_DATABASE = 'riaodb';
	readonly TEST_POSTGRES16_ROOT_DATABASE = 'db';

	readonly TEST_POSTGRES17_HOST = '0.0.0.0';
	readonly TEST_POSTGRES17_PORT = 5437;
	readonly TEST_POSTGRES17_USERNAME = 'riao_root';
	readonly TEST_POSTGRES17_PASSWORD = 'password1234';
	readonly TEST_POSTGRES17_DATABASE = 'riaodb';
	readonly TEST_POSTGRES17_ROOT_DATABASE = 'db';

	readonly TEST_POSTGRES18_HOST = '0.0.0.0';
	readonly TEST_POSTGRES18_PORT = 5438;
	readonly TEST_POSTGRES18_USERNAME = 'riao_root';
	readonly TEST_POSTGRES18_PASSWORD = 'password1234';
	readonly TEST_POSTGRES18_DATABASE = 'riaodb';
	readonly TEST_POSTGRES18_ROOT_DATABASE = 'db';
}

/**
 * Load & export environment variables
 */
export const env: Environment = configure(Environment);
