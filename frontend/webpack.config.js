const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './static/js'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new Dotenv(), // Load environment variables from .env file
    ],
};
