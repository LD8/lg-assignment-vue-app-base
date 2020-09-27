const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
  // devServer: {
  //   hot: true,
  // },
  plugins: [
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify("http://localhost:8080/"),
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: path.join(__dirname, "public"), to: "public" }],
    }),
    new CleanWebpackPlugin(),
  ],
});
