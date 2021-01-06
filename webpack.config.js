const path = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");
const webpack = require("webpack")

 const config = {
  resolve: { extensions: [".ts", ".js", ".tsx"] },
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
  devtool: "source-map",
  plugins: [new CheckerPlugin()],
};

module.exports = config;
