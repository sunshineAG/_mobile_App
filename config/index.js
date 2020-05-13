var path = require('path')

let host='192.168.100.20'  //x
let port = '811'

module.exports = {
  build: {
    env: require('./prod.env'),
    assetsRoot:path.resolve(__dirname, '../dist'),
    assetsSubDirectory:'static' ,
    assetsPublicPath: '/',
    productionSourceMap:false,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port:8001,//Math.ceil(Math.random()*10000)+10000,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/mock': {
        'target': {
          'host': host
          , 'protocol': 'http:'
          , 'port': port
        },
        secure: false,
        bypass: function (req, res, proxyOptions) {
          /* if (req.headers.accept.indexOf('html') !== -1) {
           return '/index.html';
           }*/
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
