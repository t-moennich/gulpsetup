var path          = require('path');
var fs            = require('fs');
var jf            = require('jsonfile');
var spawn         = require('child_process').spawn;
var includePath   = require('app-module-path');



var generator = {
}

generator.AHOI          = path.dirname(require.main.filename);
generator.appDir        = process.cwd();
generator.GENERATOR      = {
  name: 'basic-template',
  path: path.join(generator.AHOI, 'basic-template')
}

generator.localConfFile = path.join(generator.appDir, 'config.json');
generator.localNpmPath  = path.join(generator.appDir, '.ahoi');



generator.init = function( g ){
  this.GENERATOR = (g) ? g : this.GENERATOR
  var c = (!this.localConf() ) ? this.createLocalConf() : this.writeGenerator()
}

generator.addPath = function(_path){

   return includePath.addPath(this.appDir);
}

generator.localConf = function(){

  return fs.existsSync( this.localConfFile );
}


generator.createLocalConf = function(){

    var obj  = {};
    var self = this;

    jf.writeFile(this.localConfFile, obj, function(err) {
        if(!err) self.writeGenerator();
    })
}

generator.writeGenerator = function(){

    var obj = {generator: this.GENERATOR}
    var self = this;
    jf.writeFile(this.localConfFile, obj, function(err) {
      self.run();
    })
}

generator.run = function(){

  var _env  = process.env;
  var c     = new Array( this.GENERATOR.path )
  var cmd   = path.join(generator.AHOI, './node_modules/grunt-init/bin/grunt-init');
  var self  = this;
  spawn(cmd, [c] , { stdio: 'inherit', env: _env  })
    .on('close', function(){
       self.afterFirstRun();
    });
}

generator.afterFirstRun = function(){

  var cmd = "npm";
  var parm = new Array('i');

  //process.chdir( this.localNpmPath );
  spawn(cmd, parm , { stdio: 'inherit' })
    .on('close', function(){
       console.log("run mit Gulp")
    });
}

module.exports = generator;
