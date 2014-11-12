var jf        = require('jsonfile');
var fs        = require('fs');
var conf      = '../config.json';
var spawn     = require('child_process').spawn;

module.exports = {
  hasLocalConfig: function(){
    return  fs.existsSync(conf);
  },

  writeConf: function(){
    spawn('./node_modules/grunt-init/bin/grunt-init', ['template'], { stdio: 'inherit' })
      .on('close', function(){

      });
  },
  
  index: function(){
    if (!this.hasLocalConfig()) this.writeConf();
  }
}
