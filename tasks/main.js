var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var path        = require('path');
var jade        = require('gulp-jade');
var affected    = require('gulp-jade-find-affected');
var sass        = require('gulp-sass');
var livereload  = require('gulp-livereload');
var watch       = require('gulp-watch');
var notify      = require("gulp-notify");
var connect     = require('gulp-connect');
var newer       = require('gulp-newer');

var config      = require('../config');
var spawn       = require('child_process').spawn;
var cat  = require('gulp-cat');


// http://www.google.de

var paths = {
  sass: '../dev/sass/*.scss',
  jade: '../dev/jade/*.jade',
  dev: {
    base: '../app',
    styles: '../app/css'
  }
};


gulp.task('jade', function() {
  var YOUR_LOCALS = {
    debug: true,
    livereload: config.server.livereload
  };


  gulp.src(paths.jade)

    .pipe( newer( paths.dev.base ) )
    .pipe( affected() )

    .pipe( plumber( {errorHandler: notify.onError( {
      "title": "OINKOINK",
      "subtitle": "JADE BUG",
      "message": "Error: <%= error.message %>",
      "sound": "oink", // case sensitive
      "icon": path.join(__dirname, "gulp.png"), // case sensitive
      "onLast": true,
      "wait": false
      } )
    } ) )
    .pipe( jade( {
      locals: YOUR_LOCALS,
      pretty: true
    } ) )

    .pipe( gulp.dest( paths.dev.base) )
    .pipe( livereload( config.server.livereload, { auto: false } ) );

});



gulp.task('ahoi', function() {
    gulp.src('./ar-12m.ans')
        .pipe(cat());
});




//gulp.task('default', ['watch']);
