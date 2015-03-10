'use strict';
var path = require('path');

var generator         = "";
var appDir   			    = process.cwd();
var fs           		 	= require('fs');
var jf            		= require('jsonfile');
var merge							= require('merge');
var generatorconfig		= require( __dirname +'/config.json');


////////////////////////////////////////////////////////
// Basic template description.

exports.notes = "AHOI BASIC TEMPLATE";
// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
				'install_. After that, you may execute project tasks with _grunt_. For ' +
				'more information about installing and configuring Grunt, please see ' +
				'the Getting Started guide:' +
				'\n\n' +
				'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.

exports.template = function(grunt, init, done) {

	var _done = done;
	var self = this;
	var localConfig;

	var fragen = [
		// Prompt for these values.
		init.prompt('name'),
		init.prompt('title'),
		init.prompt('description'),
		init.prompt('version'),
	]

	// for(var i in generatorconfig){
	// 	frage.push(init.prompt( i ))
	// }

	init.process({}, fragen


	, function(err, props) {
		// Files to copy (and process).
		var files = init.filesToCopy(props,{noProcess: 'dev/**'});
		var config  = {
			name :  props.name,
			title:  props.title,
			description:  props.description,
			version: props.version
		}

		// Actually copy (and process) files.
		init.copyAndProcess(files, props);

		//Empty folders won't be copied over so make them here
		grunt.file.mkdir(appDir + '/app/_assets/img');
		grunt.file.mkdir(appDir + '/app/_assets/css/plugins');
		grunt.file.mkdir(appDir + '/app/_assets/js/vendor');
		grunt.file.mkdir(appDir + '/app/_assets/js/plugins');
		grunt.file.mkdir(appDir + '/app/_assets/js/src-map');

		props.devDependencies = {
			"browser-sync": "~1.5.8",
			"forever": "^0.13.0",
			"forever-monitor": "~1.5.1",
			"grunt": "~0.4.5",
			"gulp": "~3.8.8",
			"gulp-autoprefixer": "~1.0.1",
			"gulp-bower": "0.0.7",
			"gulp-cat": "^0.3.1",
			"gulp-connect": "~2.0.6",
			"gulp-csslint": "~0.1.5",
			"gulp-filter": "~1.0.2",
			"gulp-jade": "~0.11.0",
			"gulp-jade-find-affected": "^0.1.3",
			"gulp-livereload": "~2.1.1",
			"gulp-newer": "^0.3.0",
			"gulp-notify": "~2.0.0",
			"gulp-plumber": "~0.6.6",
			"gulp-sass": "~1.0.0",
			"gulp-sourcemaps": "~1.2.7",
			"gulp-watch": "~1.0.7",
			"require-dir": "^0.1.0",
			"main-bower-files": "~2.4.0",
			"jsmart": "~2.14.0",
			"jade": "~1.9.1"
    };

		init.writePackageJSON( 'package.json', props);

		// WRITE OR MERGE CONFIG FILE
		if (fs.existsSync(appDir + '/config.json')){
			localConfig = require(appDir + '/config.json')
			config =  merge.recursive(true, props, localConfig )
		}

		config =  merge.recursive(true, config, generatorconfig )
		jf.writeFile( appDir + '/config.json', config, function(err) {
			done();
		})
	});
};
