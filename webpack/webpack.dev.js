const webpack = require("webpack");
const { plugins } = require("./webpack.common");

module.exports = {
  devtool: "cheap-module-source-map",
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify({
        NODE_ENV: "development",
      }),
    }),
  ],
};
