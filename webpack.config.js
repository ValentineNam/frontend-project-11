'use strict'

const path = require('path');
const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

// const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode,
  target,
  devtool,
  entry: path.resolve(__dirname,  'src', 'index.js'),
  stats: 'warning:false',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'index.[contenthash].js',
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8000,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'index.html' )
    }),
    // new miniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'postcss-loader',
        // test: /\.(scss)$/,
  //       use: [
  //         {
  //           // Extracts CSS for each JS file that includes CSS
  //           loader: miniCssExtractPlugin.loader
  //         },
  //         {
  //           // Interprets `@import` and `url()` like `import/require()` and will resolve them
  //           loader: 'css-loader'
  //         },
  //         {
  //           // Loader for webpack to process CSS with PostCSS
  //           loader: 'postcss-loader',
  //           options: {
  //             postcssOptions: {
  //               plugins: [
  //                 autoprefixer
  //               ]
  //             }
  //           }
  //         },
  //         {
  //           // Loads a SASS/SCSS file and compiles it to CSS
  //           loader: 'sass-loader'
  //         }
  //       ]
      }
    ]
  }
}