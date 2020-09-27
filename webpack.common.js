const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.(css)$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.(less)$/,
        use: ["vue-style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: "file-loader",
        // use: {
        //   loader: "file-loader",
        //   options: {
        //     outputPath: "img",
        //     name: "[name].[ext]",
        //   },
        // },
      },
    ],
  },
  plugins: [
    // 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "Something",
      favicon: path.resolve("public/favicon.ico"),
      template: "./public/index.html",
    }),
  ],
};
