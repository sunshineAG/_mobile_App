var path = require('path')
let host='192.168.100.20'  //mac 
let port = '811'

module.exports = {
  build: {
    env: require('./prod.env'),
    assetsRoot:path.resolve(__dirname, '../dist'),// path.resolve(__dirname, '../dist'),
    assetsSubDirectory:'static' ,
    assetsPublicPath: '/',
    productionSourceMap:false,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  build_test: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist_test/main.html'),
    assetsRoot: path.resolve(__dirname, '../dist_test'),
    assetsSubDirectory:'static' ,
    assetsPublicPath: '/',
    productionSourceMap:true,
    productionGzip: false,
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
      '/index.php': {
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
      },
        '/upload': {
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
        },
      '/echo': {
        ws: true,
        'target': {
          'host': host
          , 'protocol': 'ws:'
          , 'port': '50001'
        },
        secure: false
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
