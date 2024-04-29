import path from "path";
import webpack from "webpack";
import "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const HtmlWebpackPlugin = require("html-webpack-plugin");

// console.log("process.env.NODE_ENV:", process.env.NODE_ENV);

const config: webpack.Configuration = {
  mode: process.env.NODE_ENV as "development" | "production",
  entry: "./src/main.tsx",
  devtool: process.env.NODE_EVN === "development" ? "inline-source-map" : "source-map",
  target: "browserslist",
  output: { path: path.join(__dirname, "/dist"), filename: "bundle.js", clean: true, publicPath: "", iife: true },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
      watch: true,
    },
    port: 3000,
    open: false,
    hot: true,
    liveReload: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      { test: /\.txt/, type: "asset/source" },
      {
        test: /\.(png|jpg|jpeg|gif|ttf)$/i,
        type: "asset/resource",
      },
      { test: /\.(svg)$/, type: "asset/inline" },
      // { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      {
        test: /\.s[ac]ss$/i,
        // use: ["style-loader", "css-loader", "sass-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      //* V1: ts-loader + babel-loader
      // { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      // { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      //* V2: only babel-loader
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
  resolve: { extensions: [".tsx", ".ts", ".js", "jsx"] },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].chunk_css.css",
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html", favicon: "./public/favicon.svg" }),
  ],
};

export default config;
