const path = require("path");
var webpack = require('webpack');

module.exports = {
    entry: ['./src/js/index.tsx'],
    output: {
        filename: './bundle.js'
    },
    devServer: {
        contentBase: "./src",
        hot: true
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [],
                loader: "ts-loader"
            },
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
};