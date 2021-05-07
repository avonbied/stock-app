import * as path from 'path';
import 'html-webpack-plugin';

import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tsOptions = {
	transpileOnly: true
};

const config = {
	mode: 'development',
	entry: path.resolve(__dirname, './src/index.tsx'),
	module: {
		rules: [
			{test: /\.tsx?$/, exclude: /node_modules/, use: {loader: 'ts-loader', options: tsOptions}},
			{test: /\.module\.css$/, use: [
				'style-loader',
				{loader: 'css-loader', options: {import: false, modules: true}}
			]},
			{test: /\.css$/i, exclude: /\.module\.css$/, use: ['style-loader', 'css-loader']},
			{test: /\.svg$/i, type: 'asset/resource'},
			{test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i, type: "asset"},
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
		new HtmlWebpackPlugin({ template: 'src/index.html' }),
		new CopyPlugin({ patterns: [{
			from: 'src/assets/',
			to: 'assets/',
			toType: 'dir'
		}]})
	]
};

export default config;