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

  var c = new Array( );
  var cmd = path.join(this.AHOI, ' gulp');

  process.chdir( this.appDir + '/.ahois' );

  spawn('gulp', [] , { stdio: 'inherit' })
    .on('close', function(){
        console.log("Ende im Gelände")
    });

}

developer.bower = function( param){

    console.log( "Bower runner")

    process.chdir( this.appDir + '/.ahois' );

    spawn('bower', ['install'] , { stdio: 'inherit' })
    .on('close', function(){
      console.log("Bower  Ende im Gelände")
    });
}

module.exports = developer;
