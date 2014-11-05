var path            = require('path');
var fs              = require('fs');

var src             = '../dev'
var production      = '../app';
var build           = '../build';


var developmentAssets = production + '/assets';
var productionAssets  = '../build/production/assets';

var localConfig = {}

if (fs.existsSync('../config.js')){
  localConfig = require('../config')
}

console.log(localConfig)

module.exports = {



  server: {
    livereload: 35728,

    development: {
      server: {
        baseDir: [production]
      },
      port    : 9999,
      open    : false,
      notify  : false,
      files: [
        developmentAssets + '/css/*.css',
        developmentAssets + '/js/*.js',
        developmentAssets + '/images/**',
        developmentAssets + '/fonts/*'
      ]
    }
  }

  ,sass: {
    src:  src + '/sass/*.{sass,scss}',
    dest: developmentAssets + '/css',
    options: {
      noCache: true,
      compass: false,
      bundleExec: false,
      sourcemap: true,
      sourcemapPath: './maps'
    }
  }
}
