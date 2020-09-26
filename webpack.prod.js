const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
  plugin: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin(["public"]),
  ],
});
