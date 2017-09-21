const path = require("path");
var webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/js/index.tsx'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build')
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
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: {
                    loader: 'url-loader'
                },
            },
            {
                test: /\.css$/,
                loaders: ["style-loader","css-loader"]
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({template: 'src/index.html'})
    ]
};