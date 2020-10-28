const path = require("path");
// const dotenv = require("dotenv");
// dotenv.config();

const isProd = process.env.NODE_ENV === "production";

let fileNamePrefix = "";
if (!isProd) {
  fileNamePrefix = "app/webroot/";
}

module.exports = {
  target: "web",
  mode: "production",
  node: {
    global: false
  },
  entry: require("./entry"),
  output: {
    publicPath: "/",
    path: require("./path"),
    filename: `${fileNamePrefix}js/vue-build/[name]${
      isProd ? ".[contenthash]" : ""
    }.js`
  },
  resolve: {
    extensions: ["*", ".js", ".vue", ".json"],
    alias: {
      "@": path.resolve(__dirname, "../src")
    }
  },
  module: require("./module"),
  plugins: require("./plugins"),
  externals: {
    axios: "axios",
    moment: "moment",
    "socket.io-client": "io"
  }
};
