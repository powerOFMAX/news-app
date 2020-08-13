const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: ["@babel/polyfill","./src/index.js"],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
};
