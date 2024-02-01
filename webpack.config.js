const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    optimization: {
        minimize: false,
    },
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].js",
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'style.css',
        }),
    ],
}