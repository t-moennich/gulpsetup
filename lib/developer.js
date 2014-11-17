var path          = require('path');
var fs            = require('fs');
var jf            = require('jsonfile');
var spawn         = require('child_process').spawn;


var developer = {

}

developer.AHOI          = path.dirname(require.main.filename);
developer.appDir        = process.cwd();


developer.init = function(){
    this.run()
}

developer.run = function(){


  var c = new Array( );
  var cmd = path.join(this.AHOI, ' gulp');

  console.log( this.AHOI )

  process.chdir( this.AHOI );
  spawn('gulp', [] , { stdio: 'inherit' })
    .on('close', function(){

    });

}

module.exports = developer;
