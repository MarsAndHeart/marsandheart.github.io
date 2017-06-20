var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',

  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?modules'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader?limit=8192&name=images/[name].[ext]'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader?name=fonts/[name].[ext]'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: 'csv-loader'
      },
      {
        test: /\.xml$/,
        use: 'xml-loader',
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.template.html"//html生成
    }),
    new ExtractTextPlugin('styles.css'),//CSS分离
    new webpack.HotModuleReplacementPlugin()//热加载插件
  ],

  devServer: {//本地开发服务器
    historyApiFallback: true,
    inline: true,
    hot: true
  } 
}