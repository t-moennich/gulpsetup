"use strict";
var inquirer      = require("inquirer");
var path          = require('path');
var fs            = require('fs');
var jf            = require('jsonfile');
var spawn         = require('child_process').spawn;
var includePath   = require('app-module-path');

var q = {}

q.bower = function(_cmd){

  var that = this;
  inquirer.prompt({
    type: "list",
    name: "option",
    message: "Aye Captain, what should we Bower?",
    choices: [ "init", "install", "search" ]
  }, function( _answer ) {



    switch ( _answer["option"] ) {
      case "init":
        console.log("runner bower init init ")
        break;
      case "install":
        console.log("Install", that);
        that.installBowerPackages();
        break;

      case "search":
        inquirer.prompt({
          type: "init",
          name: "package",
          message: "PackageName:",

        },
        that.searchBowerPackage

        );
      default:


    }
  });

}

q.installBowerPackages = function(){
  console.log("sdsd");
  spawn('bower', ['install'], { stdio: 'inherit' })
  .on('close', function(){
    console.log("### AYE #### function implemented – yet")
  });
}


q.searchBowerPackage = function( _bower ){
  spawn('bower', ['search', _bower['package'] ], { stdio: 'inherit' })
  .on('close', function(){
    console.log("### AYE #### No function implemented – yet")
  });
}
module.exports = q


// inquirer.prompt({
//   type: "list",
//   name: "beverage",
//   message: "And your favorite beverage?",
//   choices: [ "Pepsi", "Coke", "7up", "Mountain Dew", "Red Bull" ]
// });
