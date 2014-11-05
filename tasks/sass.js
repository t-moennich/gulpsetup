var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;

var sass         = require('gulp-sass');
var gulpFilter   = require('gulp-filter');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var notify       = require("gulp-notify");
var path         = require('path');

var config       = require('../config');

// /**
//  * Generate CSS from SCSS
//  * Build sourcemaps
//  */
// gulp.task('_sass_', function() {
//   var sassConfig = config.sass.options;
//
//   sassConfig.onError = browserSync.notify;
//
//   // Don’t write sourcemaps of sourcemaps
//   var filter = gulpFilter(['*.css', '!*.map']);
//
//
//   return gulp.src(config.sass.src)
//     .pipe(plumber())
//     .pipe(sass(sassConfig))
//     .pipe(sourcemaps.init())
//     .pipe(autoprefixer(config.autoprefixer))
//     .pipe(filter) // Don’t write sourcemaps of sourcemaps
//     .pipe(sourcemaps.write('.', { includeContent: false }))
//     .pipe(filter.restore()) // Restore original files
//     .pipe(gulp.dest(config.sass.dest));
// });


gulp.task('scss', function () {
  var sassConfig = config.sass.options;

  sassConfig.onError = browserSync.notify;

  // Don’t write sourcemaps of sourcemaps
  var filter = gulpFilter(['*.css', '!*.map']);

   return gulp.src( config.sass.src )
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
      .pipe( sourcemaps.init() )
        .pipe( sass() )
      .pipe(sourcemaps.write('./maps'))
      .pipe( gulp.dest( config.sass.dest ) )
      .pipe(reload( {stream:true} ) );

});

gulp.task('styles', ['scss'])
