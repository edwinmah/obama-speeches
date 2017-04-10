const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'js/index.jsx'),
  output: {
      path: path.resolve(__dirname, 'build/js'),
      filename: 'index.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx','.es6']
  }
};
