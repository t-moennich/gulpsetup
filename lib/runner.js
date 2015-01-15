var path          = require('path');
var fs            = require('fs');
var jf            = require('jsonfile');
var spawn         = require('child_process').spawn;
var includePath   = require('app-module-path');


var runner = { }
runner.AHOI   = path.dirname(require.main.filename);
runner.init   = function(){
  console.log("runner" + this.AHOI)
}
module.exports = runner;
