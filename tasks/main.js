var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var path        = require('path');
var jade        = require('gulp-jade');
var affected    = require('gulp-jade-find-affected');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var livereload  = require('gulp-livereload');
var watch       = require('gulp-watch');
var notify      = require("gulp-notify");
var connect     = require('gulp-connect');
var newer       = require('gulp-newer');


var paths = {
  sass: '../dev/sass/*.scss',
  jade: '../dev/jade/*.jade',
  dev: {
    base: '../app',
    styles: '../app/css'
  }
};


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

gulp.task('jade', function() {
  var YOUR_LOCALS = {
    debug: true
  };

  gulp.src(paths.jade)

    .pipe( newer( paths.dev.base ) )
    .pipe( affected() )

    .pipe( plumber( {errorHandler: notify.onError( {
      "title": "OINKOINK",
      "subtitle": "JADE BUG",
      "message": "Error: <%= error.message %>",
      "sound": "oink", // case sensitive
      //"icon": path.join(__dirname, "gulp.png"), // case sensitive
      "onLast": true,
      "wait": false
      } )
    } ) )
    .pipe( jade( {
      locals: YOUR_LOCALS,
      pretty: true
    } ) )

    .pipe( gulp.dest( paths.dev.base) )
    .pipe( livereload( { auto: false } ) );

});



gulp.task('scss', function () {
   gulp.src( paths.sass )
      .pipe(plumber({errorHandler: notify.onError({
        "title": "OINKOINK",
        "subtitle": "SCSS Problem",
        "message": "Error: <%= error.message %>",
        "sound": "oink", // case sensitive
        "icon": path.join(__dirname, "gulp.png"), // case sensitive
        "onLast": true,
        "wait": false
      })
      }))
      .pipe( sass() )
      .pipe( gulp.dest( paths.dev.styles ) )
      .pipe(reload( {stream:true} ) );

});


gulp.task('default', ['browser-sync'], function () {
  livereload.listen();
  gulp.watch( "../dev/jade/**/*.jade", ['jade']);
  gulp.watch( "../dev/sass/*.scss", ['scss']);
});

//gulp.task('default', ['watch']);
gulp.task('dev', ['connect'])
gulp.task('styles', ['scss'])
