var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.json$/,
        loader: "json-loader"
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
      template: __dirname + "/app/index.template.html"//new 一个这个插件的实例，并传入相关的参数
    }),
    new ExtractTextPlugin('styles.css'),//CSS分离
    new webpack.optimize.UglifyJsPlugin({//代码压缩
      compress: {
        warnings: false
      },
      mangle: {
        except: ['exports', 'require']
      }
    })
  ]
}