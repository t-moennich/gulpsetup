var path          = require('path');
var fs            = require('fs');
var jf            = require('jsonfile');
var spawn         = require('child_process').spawn;


var developer = {
}

developer.AHOI          = path.dirname(require.main.filename);
developer.appDir        = process.cwd();


developer.init = function(){
    this.run();
}

developer.run = function(){

  console.log( "RUNNER")
  var c = new Array( );
  var cmd = path.join(this.AHOI, ' gulp');

  console.log( this.appDir )

  process.chdir( this.appDir + '/.ahois' );
  console.log( process.cwd() )

  spawn('gulp', [] , { stdio: 'inherit' })
    .on('close', function(){
        console.log("Ende im Gelände")
    });

}

module.exports = developer;
