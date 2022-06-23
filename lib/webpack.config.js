// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const baseConfig = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

const config = {
  ...baseConfig,
  mode: "development",
  devtool: "inline-source-map",
  entry: "./example/index.ts",
  output: {
    path: path.resolve(__dirname, "./example/dist"),
    filename: "index.[hash].js",
  },
  devServer: {
    open: true,
    host: "localhost",
    port: 8080,
    compress: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "example/index.html",
      inject: "body",
    }),
    // new CopyPlugin({
    //   patterns: [{ from: "src/assets", to: "assets" }],
    // }),
  ],
};

const libConfig = {
  ...baseConfig,
  mode: "prodaction",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "RIS.js",
    library: {
      name: "RIS",
      type: "umd",
    },
  },
  optimization: {
    minimize: true,
  },
  devtool: "inline-source-map",
};

module.exports = () => {
  if (isProduction) {
    return libConfig;
  } else {
    return config;
  }
};

