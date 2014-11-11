"use strict";
var inquirer    = require("inquirer");
var poster      = require('../utils/poster')
var spawn       = require('child_process').spawn;



var _setup = {};

_setup.init = function(done){
  // inquirer.prompt([
  //   {
  //     type: "list",
  //     name: "choice",
  //     message: "Welcome to App Setup…",
  //     choices: [
  //       "Use Generator",
  //       "Install Generator",
  //       new inquirer.Separator(),
  //       "Reset App",
  //       "Quit"
  //     ]
  //   }
  // ], function( answers ) {
  //
  //     switch (answers.choice) {
  //     case 'Setup new App':
  //       _setup.init();
  //       break;
  //     default:
  //       console.log('default')
  //     }
  //   });


  spawn('./node_modules/grunt-init/bin/grunt-init', ['template'], { stdio: 'inherit' })
    .on('close', function(){
      console.log('ready')
    });
}



module.exports = _setup;
