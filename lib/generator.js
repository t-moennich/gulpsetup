var configurator  = require ('../utils/configurator.js');
var path          = require('path');
var fs            = require('fs');
var jf            = require('jsonfile');
var spawn         = require('child_process').spawn;



// module.exports = {
//   "init": function(){
//     console.log( configurator.)
//
//   }
// }


var generator = {
}

generator.AHOI          = path.dirname(require.main.filename);
generator.appDir        = process.cwd();
generator.GENRATOR      = {
  name: 'basic-template',
  path: path.join(generator.AHOI, 'basic-template')
}
generator.localConfFile = path.join(generator.appDir, 'config.json');

generator.init = function( g ){

  this.GENRATOR = (g) ? g : this.GENRATOR
  var c = (!this.localConf() ) ? this.createLocalConf() : this.writeGenerator()
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


    var obj = {generator: this.GENRATOR}
    var self = this;
    jf.writeFile(this.localConfFile, obj, function(err) {
      self.run();
    })
}

generator.run = function(){

  console.log("run", this.GENRATOR.path);
  var c = new Array( this.GENRATOR.path );

  spawn('./node_modules/grunt-init/bin/grunt-init', ['template'], { stdio: 'inherit' })
    .on('close', function(){
      console.log('ready')
    });
}



module.exports = generator;
