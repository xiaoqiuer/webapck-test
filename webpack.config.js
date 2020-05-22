const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  // 入口
  entry: {
    app: './src/main.js'
  },
  // 出口
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "//www.aaa.com"
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif|jpeg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          esModule: false,
          publicPath: './'
        }
      }]
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '标题',
      template: './index.html'
    })
  ]
  // mode: '', // --mode = production development
  // // loader
  // // plugin
  // plugins: [
  //   new webpack**Plugin()
  // ]
}
module.exports = config