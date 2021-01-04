const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

const config = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test:/\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
    devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./client/index.html",
      favicon: path.resolve(
        __dirname,
         'client/assets/favicon-32x32.png'
         ),
    }),
  ],
}

module.exports = config
