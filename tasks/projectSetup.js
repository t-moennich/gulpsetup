
var gulp        = require('gulp');
var poster      = require('../utils/poster');
var spawn       = require('child_process').spawn;
var config      = require('../config');


gulp.task('setup', function(done){



  poster.logo();


  spawn('./node_modules/grunt-init/bin/grunt-init', ['template'], { stdio: 'inherit' })
    .on('close', done);

})
