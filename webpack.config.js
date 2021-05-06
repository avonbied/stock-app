import * as path from 'path';
import 'html-webpack-plugin';

import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tsOptions = {
	transpileOnly: true
};

const config = {
	mode: 'development',
	entry: path.resolve(__dirname, './src/index.tsx'),
	module: {
		rules: [{
			test: /\.tsx?$/,
			exclude: /node_modules/,
			use: { loader: 'ts-loader', options: tsOptions},
		  }
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js' 
	},
	plugins: [
		new HtmlWebpackPlugin({ template: 'src/index.html' })
	]
};

export default config;