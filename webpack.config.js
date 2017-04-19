const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")


const plugins = [
  new ExtractTextPlugin({
    filename: './css/bundle.css',
    allChunks: true
  }),
  new GoogleFontsPlugin({
    fonts: [
      {
        family: "Montserrat"
      },
      {
        family: "Merriweather",
        variants: [ "400", "400italic", "700", "300" ]
      }
    ]
  }),
  new HtmlWebpackPlugin({
    template: path.resolve( __dirname, 'index.html'),
    filename: 'index.html',
    inject: 'body'
  })
]


module.exports = {
  entry: path.resolve(__dirname, 'js/index.jsx'),
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: './js/bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
        include: path.resolve(__dirname, 'js')
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:  [{
            loader: 'css-loader'
          }]
        })
      }, {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [{
          loader: 'file-loader',
          query: {
            name: '[name].[ext]',
            publicPath: '..',
            outputPath: '/assets/images/'
          }
        }, {
          loader: 'image-webpack-loader',
          // set empty object for default config bug:
          // https://github.com/tcoopman/image-webpack-loader/issues/88#issuecomment-289454242
          options: {}
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx','.es6']
  },
  plugins: plugins,
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 3000
  }
};
