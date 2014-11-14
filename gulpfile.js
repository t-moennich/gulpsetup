var requireDir  = require('require-dir');
var fs          = require('fs');

var appDir        = process.cwd();

console.log('app: ' + appDir);
// Require all tasks in gulp/tasks, including subfolders
requireDir('./tasks', { recurse: true });
