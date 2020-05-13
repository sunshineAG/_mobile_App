var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: utils.getEntries(resolve('src/module/**/*.js')),
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
 /*   library: 'iview',       // 模块名称
      libraryTarget: 'umd',   // 输出格式
      umdNamedDefine: true    // 是否将模块名称作为 AMD 输出的命名空间*/
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader', exclude: /node_modules/,
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
          ,name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
       ,{ test: /\.tsx?$/, use: "ts-loader" }
    ]
  }
  , plugins: [

  ]
}
