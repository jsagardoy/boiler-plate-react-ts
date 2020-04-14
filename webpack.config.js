var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var webpack = require('webpack');
var path = require('path');

var basePath = __dirname;
const defaultBrowser = 'Google Chrome';

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    alias: {
      api: path.resolve(__dirname, './src/api/'),
      commonApp: path.resolve(__dirname, './src/common-app/'),
      common: path.resolve(__dirname, './src/common/'),
      core: path.resolve(__dirname, './src/core/'),
      layout: path.resolve(__dirname, './src/layout/'),
      content: path.resolve(__dirname, './src/content/'),
      pods: path.resolve(__dirname, './src/pods/'),
      scenes: path.resolve(__dirname, './src/scenes/'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  entry: ['@babel/polyfill', './index.tsx'],
  output: {
    path: path.join(basePath, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './dist', // Content base
    inline: true, // Enable watch and live reload
    host: 'localhost',
    port: 8080,
    stats: 'errors-only',
    open: defaultBrowser,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
          babelCore: '@babel/core', // needed for Babel v7
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]?[hash]',
        },
      },
    ],
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
