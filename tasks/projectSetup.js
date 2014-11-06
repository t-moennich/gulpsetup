
var gulp        = require('gulp');
//var plumber     = require('gulp-plumber');
//var path        = require('path');
//var jade        = require('gulp-jade');
//var affected    = require('gulp-jade-find-affected');
//var sass        = require('gulp-sass');
//var livereload  = require('gulp-livereload');
//var watch       = require('gulp-watch');
//var notify      = require("gulp-notify");

var spawn       = require('child_process').spawn;
var art         = require('ascii-art');

var config      = require('../config');


gulp.task('init', function(done){



    console.log('\n\n\n')


    art.font(' OINKOINK ', 'basic', 'black+magenta_bg+inverse').font(' v.0.1 ', 'Doom', 'black+white_bg+inverse', function(rendered){
      console.log(rendered);
    });


  spawn('./node_modules/grunt-init/bin/grunt-init', ['template'], { stdio: 'inherit' })
    .on('close', done);

})
