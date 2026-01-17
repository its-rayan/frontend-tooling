const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // our code will be compatible with Internet Explorer 11
                        presets: [
                            '@babel/preset-react', ['@babel/preset-env', { targets: "IE 11" }]
                        ]
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
    })],
    devServer: {
        port: 3000,
    },
};