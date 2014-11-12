#!/usr/bin/env node

var commander    = require('commander');
var createMenu  = require('terminal-menu')
var builder     = require("terminal-menu-program"),
    program     = new builder.Program("Test program")

commander
  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);

console.log('you ordered a pizza with:');
if (commander.peppers) console.log('  - peppers');
if (commander.pineapple) console.log('  - pineapple');
if (commander.bbq) console.log('  - bbq');


// preamble



// single screen definition
menu = program.menu("main");
menu.text("A Terminal Menu Program");
menu.spacer();
menu.option("menu switch (going to this screen when selected)", "main");
menu.spacer();
menu.check("a toggle option", function(state) { /* ... */ });
menu.check("a checked toggle option", true);
menu.check("a checked toggle callback", true, function(state) { /* ... */ });
menu.spacer();
menu.cancel("exit", function() { program.halt(); process.exit(0); });

// run single screen program
program.run("main");
