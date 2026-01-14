const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // our code will be compatible with Internet Explorer 11
                        presets: [
                            ['@babel/preset-env', { targets: "IE 11" }]
                        ]
                    }
                }
            }
        ]
    }
};