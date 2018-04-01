const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/main.js'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.(js|jsx)/, use: 'babel-loader'},
            {test: /\.css/, use: ['style-loader', 'css-loader']},
            {test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192&name=[path][name].[ext]'
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: ['dist'],
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};