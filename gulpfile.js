var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var path        = require('path');
var jade        = require('gulp-jade');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var livereload  = require('gulp-livereload');
var watch       = require('gulp-watch');
var notify      = require("gulp-notify");
var connect     = require('gulp-connect');

var paths = {
  sass: './sass/*.sass',
  jade: './jade/*.jade',
  dev: 'dev-www'
};

gulp.task('connect', function() {
  connect.server({
    root: paths.dev,
    port: 9222,
    livereload: false
  });
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
        baseDir: paths.dev
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
  var YOUR_LOCALS = {};

  gulp.src(paths.jade)
    .pipe(plumber({errorHandler: notify.onError({
      "title": "OINKOINK",
      "subtitle": "JADE BUG",
      "message": "Error: <%= error.message %>",
      "sound": "oink", // case sensitive
      //"icon": path.join(__dirname, "gulp.png"), // case sensitive
      "onLast": true,
      "wait": false
      })
    }))
    .pipe(jade({
      locals: YOUR_LOCALS
    }))

    .pipe(gulp.dest('./dev-www'))
    //.pipe(reload({stream:true}));
    .pipe(livereload({ auto: false }));

});



gulp.task('scss', function () {
   gulp.src('./scss/*.scss')
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
      .pipe(sass())
      .pipe(gulp.dest('./dev-www/css'))
      .pipe(reload({stream:true}));
      // .pipe(notify('Hello'))
});


gulp.task('default', ['browser-sync'], function () {
  livereload.listen();

  gulp.watch("./jade/*.jade", ['jade']);
  gulp.watch("scss/*.scss", ['scss']);
});

//gulp.task('default', ['watch']);
gulp.task('dev', ['connect'])
gulp.task('sass', ['scss'])
