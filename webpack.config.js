var webpack = require('webpack');
var path = require('path');

var config = {
    entry: {
        index: path.join(__dirname, 'main.js'),
        other: path.join(__dirname, 'other.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: __dirname,
        port: 8080,
        inline: true
    }
}

module.exports = config;
