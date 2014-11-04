var gulp        = require('gulp');
var browserSync = require('browser-sync');
var livereload  = require('gulp-livereload');

var config      = require('../config').server

gulp.task('browser-sync', function() {
  browserSync({
    server: {
        baseDir: paths.dev.base
    },

    notify: false,
    // watchOptions: {
    //   debounceDelay: 0,
    //   interval: 1
    // },

    open: false
  });
});

gulp.task('default', ['browser-sync'], function () {
  livereload.listen();
  gulp.watch( "../dev/jade/**/*.jade", ['jade']);
  gulp.watch( "../dev/sass/*.scss", ['scss']);
});
