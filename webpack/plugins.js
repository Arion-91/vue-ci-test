const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const isProd = process.env.NODE_ENV === "production";

let filename = "vue-build-connector.ctp";
let cssPrefix = "";
if (!isProd) {
  filename = "app/views/elements/" + filename;
  cssPrefix = "app/webroot/";
}

let plugins = [
  new HtmlWebpackPlugin({
    filename,
    inject: "false",
    templateContent: ""
  }),
  new VueLoaderPlugin(),
  new MiniCssExtractPlugin({
    filename: `${cssPrefix}css/vue-build/[name]${
      isProd ? ".[contenthash]" : ""
    }.css`
  })
];
if (isProd) {
  plugins.push(new CleanWebpackPlugin());
}

module.exports = plugins;
