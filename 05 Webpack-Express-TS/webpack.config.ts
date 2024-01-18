import path from "path";
import webpack from "webpack";

const config: webpack.Configuration = {
  mode: "production",
  // devtool: "source-map",
  devtool: false,
  entry: { main: "./server.ts" },
  output: { path: path.join(__dirname, "/dist"), filename: "bundleApi.js", clean: true, publicPath: "", iife: true },
  target: "node",
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      { test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ },
      { test: /\.(svg)$/, type: "asset/inline" },
    ],
  },
};

export default config;
