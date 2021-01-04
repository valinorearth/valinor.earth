const path = require("path");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";

const baseFilename = isDev ? "index" : "index.[contenthash]";

module.exports = {
  entry: [
    path.resolve(__dirname, "src", "js", "index.js"),
    path.resolve(__dirname, "src", "css", "index.css"),
  ],
  output: {
    path: path.resolve(__dirname, "dist", "assets"),
    filename: `${baseFilename}.js`,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: `${baseFilename}.css` }),
    new WebpackManifestPlugin({ publicPath: "/assets/" }),
  ],
};
