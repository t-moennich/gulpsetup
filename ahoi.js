/**
 * List prompt example
 */

"use strict";
var inquirer = require("inquirer");
var poster      = require('./utils/poster')
var spawn       = require('child_process').spawn;


var next = function(){
  inquirer.prompt([
    {
      type: "list",
      name: "theme",
      message: "What do you want to do?",
      choices: [
        "Order a pizza",
        "Make a reservation",
        new inquirer.Separator(),
        "Ask opening hours",
        "Talk to the receptionnist"
      ]
    }
  ], function( answers ) {
      console.log( JSON.stringify(answers, null, "  ") );
    });
}

poster.ahoi(next);
