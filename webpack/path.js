const path = require("path");
const isProd = process.env.NODE_ENV === "production";

let outputPath = path.resolve(__dirname, "../dist");
if (!isProd) {
  if (process.env.WP_OUTPUT) {
    outputPath = path.resolve(process.env.WP_OUTPUT);
  }
}

module.exports = outputPath;
