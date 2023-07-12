import { Config } from '@sveltejs/kit';
import adapter from '@sveltejs/adapter-node';

const config: Config = {
	kit: {
		adapter: adapter({})
	}
};

export default config;