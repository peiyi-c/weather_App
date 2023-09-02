const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpack = require('webpack');
require('dotenv').config({ path: './.env' });

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ]
  },

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
    new MiniCssExtractPlugin()
  ]
};

