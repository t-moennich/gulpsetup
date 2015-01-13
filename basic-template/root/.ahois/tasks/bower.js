var gulp           = require('gulp');
var mainBowerFiles = require('main-bower-files');

gulp.task('bower', function() {

    return gulp.src(mainBowerFiles({
      env: 'dev',
      paths: {
        bowerDirectory: '../bower_components',
        bowerJson: '../bower.json'
      }
    })
      // ,{ base: '../bower.json' } //if not flat structure comment in
    )
        .pipe( gulp.dest('../app/assets/bower') )
});
