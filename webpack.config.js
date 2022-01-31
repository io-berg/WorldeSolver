const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require('lodash');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'WorldeSolver',
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.txt/,
            type: 'asset/source',
        }
        ]
    },
};