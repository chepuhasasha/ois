/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

const config = {
  plugins: [new ESLintPlugin({ extensions: ["ts"] })],
  mode: "development",
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    library: {
      name: "OIS",
      type: "umd",
    },
  },
  externals: {
    "pixi.js": {
      commonjs: "pixi.js",
      commonjs2: "pixi.js",
      umd: "pixi.js",
      script: "PIXI",
      root: "PIXI",
    },
  },
};

module.exports = (env, argv) => {
  if (argv.mode === "development") config.watch = true;
  if (argv.mode === "production") config.watch = false;
  return config;
};
