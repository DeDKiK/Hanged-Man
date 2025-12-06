const webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify({
        NODE_ENV: "production",
      }),
    }),
  ],
};
