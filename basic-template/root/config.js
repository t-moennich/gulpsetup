var path            = require('path');
var fs              = require('fs');
var merge           = require('merge');

var src             = '../dev'
var production      = '../app';
var build           = '../build';


var developmentAssets = production + '/assets';
var productionAssets  = '../build/production/assets';

var localConfig;


var originalConfig = {
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


if (fs.existsSync('../config.json')){
  localConfig = require('../config')
  console.log( merge.recursive(true, originalConfig, localConfig ))
  module.exports = merge.recursive(true, originalConfig, localConfig )
}else{
  module.exports = originalConfig;
}
