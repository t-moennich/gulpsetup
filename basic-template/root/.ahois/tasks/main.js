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
var config      = require('../../config');

// http://www.google.de

// var paths = {
//   sass: '../dev/sass/*.scss',
//   jade: '../dev/jade/*.jade',
//   dev: {
//     base: '../app',
//     styles: '../app/css'
//   }
// };


//gulp.task('default', ['watch']);
