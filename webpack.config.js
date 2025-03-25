const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

// const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode,
  target,
  devtool,
  entry: path.resolve(__dirname, 'src', 'index.js'),
  stats: 'warning:false',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'index.[contenthash].js',
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test:  /\.(sc|c|sa)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
    ],
  },
};
