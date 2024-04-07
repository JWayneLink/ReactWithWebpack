// webpack.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

// const express =  require("express")
// const app =  express();
// app.use(express.static(__dirname));

console.log('__dirname',__dirname);

module.exports = {
    mode: 'development', // production
    entry: ['./src/index.js', './src/App.js'], // 程式進入點
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        clean: true,
        publicPath: "/public/"
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/, // js or jsx都可編譯
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: true,
            minify: true,
        }),
        new MiniCssExtractPlugin({
            filename: './css/index.css'
        })
    ],
    devServer: {
        port: 3000,
    }
};