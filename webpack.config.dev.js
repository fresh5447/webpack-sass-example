var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var sassLoaders = [
    'css-loader',
    'postcss-loader',
    'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './client')
  ];

module.exports = {
  devtool: 'eval',
  entry: {
    app: ['./client/app']
  },
    output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].js',
    publicPath: '/static/',
    plugins: [  new ExtractTextPlugin('[name].sass'), new webpack.optimize.CommonsChunkPlugin("init.js") ]

  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].sass')
  ],
  resolve: {
    extensions: ['', '.js', '.sass'],
    modulesDirectories: ['src', 'node_modules']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    },
      { test: /\.sass$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
    ]
  }
};


