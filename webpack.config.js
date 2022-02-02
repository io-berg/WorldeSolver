const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require('lodash');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
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
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }
        ]
    },
};