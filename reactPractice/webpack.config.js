var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',

  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {//在配置文件里添加JSON loader
    rules: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { 
        test: /\.(gif|jpg|png)\??.*$/,
        loader: 'url-loader?limit=8192&name=images/[name].[ext]'
      },
      { 
        test: /\.(woff|svg|eot|ttf)$/,
        loader: "file-loader?name=fonts/[name].[ext]"
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.template.html"//new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.HotModuleReplacementPlugin()//热加载插件
  ],

  devServer: {
    historyApiFallback: true,
    inline: true,
    hot: true
  } 
}