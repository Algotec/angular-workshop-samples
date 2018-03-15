const defaultConfig = require('./webpack.common');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

// Webpack dev Config
const webpackConfig = {
	entry: {
		'polyfills': './src/polyfills.ts',
		'app': './src/app.ts'
	},
	output: {
		path: path.resolve(__dirname, '../dist')
	}
};


module.exports = webpackMerge(defaultConfig, webpackConfig);