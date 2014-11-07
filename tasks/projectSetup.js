
var gulp        = require('gulp');
//var plumber     = require('gulp-plumber');
//var path        = require('path');
//var jade        = require('gulp-jade');
//var affected    = require('gulp-jade-find-affected');
//var sass        = require('gulp-sass');
//var livereload  = require('gulp-livereload');
//var watch       = require('gulp-watch');
//var notify      = require("gulp-notify");

var poster      = require('../utils/poster');

var spawn       = require('child_process').spawn;

var config      = require('../config');


gulp.task('init', function(done){



  poster.logo();


  spawn('./node_modules/grunt-init/bin/grunt-init', ['template'], { stdio: 'inherit' })
    .on('close', done);

})
