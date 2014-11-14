var requireDir = require('require-dir');
var fs = require('fs');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./tasks', { recurse: true });
