var fs      = require('fs'),
    path    = require('path'),
    events  = require('events'),
    exec    = require('child_process').exec,
    spawn   = require('child_process').spawn,
    cd      = require('./node_modules/cd/index')
    cmd     = require('./node_modules/cmd-exec').init();


var ROOT =  new cd('./dev-www/');
//cmd.exec("./node_modules/.bin/devserver -p 9200)")
//

console.log("GOOD")
//
cmd
  .exec("forever start ./node_modules/.bin/gulp")
  .then(function(res){
    console.log("GOOD");
  })
  .fail(function(err){
    console.log(err.message);
  })
  .done(function(){
    console.log("Done!");
  });


//cd ./app && ../node_modules/.bin/forever start --pidFile ${PID}  ../node_modules/.bin/devserver -p 9200)
