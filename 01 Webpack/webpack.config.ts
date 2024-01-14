import path from "path";
import webpack from "webpack";
import "webpack-dev-server";

const HtmlWebpackPlugin = require("html-webpack-plugin");

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/main.tsx",
  devtool: "inline-source-map",
  output: { path: path.join(__dirname, "/dist"), filename: "bundle.js", clean: true },
  devServer: { static: "./dist", port: 3000, open: false },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|ttf)$/i,
        type: "asset/resource",
      },
      { test: /\.(svg)$/, type: "asset/inline" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      //* V1
      // { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      // { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      //* V2
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
  resolve: { extensions: [".tsx", ".ts", ".js", "jsx"] },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html", favicon: "./public/favicon.svg" })],
};

export default config;
