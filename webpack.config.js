const path = require("path");

const config = {
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
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "muup.js",
    library: {
      name: "Muup",
      type: "umd",
    },
  },
  externals: {
    "pixi.js": "PIXI",
  },
};

module.exports = (env, argv) => {
  if (argv.mode === "development") config.watch = true;
  if (argv.mode === "production") config.watch = false;
  return config;
};
