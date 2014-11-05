var src               = '../app';
var build             = '../build';
var development       = '../build/development';
var production        = '../build/production';
var srcAssets         = '../app/_assets';
var developmentAssets = '../app/assets';
var productionAssets  = '../build/production/assets';

module.exports = {
  server: {
    development: {
      server: {
        baseDir: [src]
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
};
