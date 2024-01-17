const path = require("path");

module.exports = {
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }],
  },
  mode: "production",
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  entry: { main: "./server.ts" },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "apiFinal.js",
  },
  target: "node",
};
