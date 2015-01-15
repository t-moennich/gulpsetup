#!/usr/bin/env node
"use strict";

var inquirer    = require("inquirer");
var program     = require('commander');
var poster      = require('./utils/poster')
var spawn       = require('child_process').spawn;

var generator   = require('./lib/generator');
var developer   = require('./lib/developer');
var runner      = require('./lib/runner');

var prg = function(){
  program
  .version('0.0.1')
    .option('-d, --develop', 'Start Development Envoriment')
    .option('-b, --build', 'build App')
    .option('-n, --new', 'create new App')
    .option('-s, --start', 'start App')
    .option('-g, --generator', 'choose + run a generator')
    .parse(process.argv);

  // TODOS

  if (program.develop) developer.init();
  if (program.build) console.log('  - build');
  if (program.new) console.log('  - new');
  if (program.start) console.log('  - start');
  if (program.generator) generator.init( program.args[0] )
  if(!program.rawArgs[2] && !program.args.length ) poster.ahoi( widget );
}


var widget = function(){
  console.log("##################### HOWDY, COMMANDS #################################")
  program.outputHelp();
  console.log("### # ####     ## ### # ## ### ### ## #### #### ####### #### ##### ####")
  var _choices = [
    "Start Development",
    "Bower",
    "Build App",
    new inquirer.Separator(),
    "Setup new App",
    "Quit",
  ];

  inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What do you want to do?",
      choices: _choices
    }
  ], function( answers ) {

      switch (answers.choice) {
      case 'Setup new App':
        console.log('list available Generators')
        break;
      case 'Quit':
        break;

      case 'Start Development':
        developer.init( );
        break;
      case 'Bower':
        developer.bower();
        break;
      default:
        //console.log('default')
      }
  });
}




prg();
