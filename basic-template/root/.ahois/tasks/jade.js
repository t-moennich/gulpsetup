var jade        = require('jade');
var gulpJade    = require('gulp-jade');
var gulp        = require('gulp');
var affected    = require('gulp-jade-find-affected');
var plumber     = require('gulp-plumber');
var notify      = require("gulp-notify");
var connect     = require('gulp-connect');
var newer       = require('gulp-newer');
var path        = require('path');
var livereload  = require('gulp-livereload');

var config      = require('../../config');


jade.filters.smarty = function (str) {
  return str + '!!SMARTY!!';
}


gulp.task('jade', function() {
  var YOUR_LOCALS = {
    debug: true,
    conf: config,
    livereload: config.server.livereload
  };


  gulp.src(config.jade.src)

  .pipe( newer( config.jade.dest ) )
  .pipe( affected() )

  .pipe( plumber( {errorHandler: notify.onError( {
      "title": "AHOY",
      "subtitle": "JADE BUG",
      "message": "Error: <%= error.message %>",
      "sound": "oink", // case sensitive
      "icon": path.join(__dirname, "gulp.png"), // case sensitive
      "onLast": true,
      "wait": false
    } )
  } ) )
  .pipe( gulpJade(
    {
      locals: YOUR_LOCALS,
      pretty: true
    }
    )
  )

  .pipe( gulp.dest( config.jade.dest ) )
  .pipe( livereload( config.server.livereload, { auto: false } ) );
});
