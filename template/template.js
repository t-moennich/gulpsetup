'use strict';

// Basic template description.
exports.description = 'Scaffolds a new project with GruntJS, SASS, MODX and optionally SUSY.';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
				'install_. After that, you may execute project tasks with _grunt_. For ' +
				'more information about installing and configuring Grunt, please see ' +
				'the Getting Started guide:' +
				'\n\n' +
				'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
//exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

	init.process({}, [
		// Prompt for these values.
		init.prompt('name'),
		init.prompt('title'),
		init.prompt('description'),
		init.prompt('version'),

	], function(err, props) {
		// Files to copy (and process).
		//var files = init.filesToCopy(props);

		// Actually copy (and process) files.
		//init.copyAndProcess(files, props);

		// Empty folders won't be copied over so make them here
		grunt.file.mkdir('../app/_assets/img');
		grunt.file.mkdir('../app/_assets/css/plugins');
		grunt.file.mkdir('../app/_assets/js/vendor');
		grunt.file.mkdir('../app/_assets/js/plugins');
		grunt.file.mkdir('../app/_assets/js/src-map');
		grunt.file.mkdir('../app/_assets/modx');
		grunt.file.mkdir('../app/_assets/modx/chunks');
		grunt.file.mkdir('../app/_assets/modx/snippets');
		grunt.file.mkdir('../app/_assets/modx/plugins');

		console.log('Folder gemacht')

		// Generate package.json file, used by npm and grunt.
		init.writePackageJSON('../pimmel.json', {
			name: props.name,
			description: props.description,
			version: props.version,
			devDependencies: {
				"grunt-contrib-concat": "~0.3.x",
				"grunt-contrib-uglify": "~0.2.x",
				"grunt-contrib-cssmin": "~0.6.x",
				"grunt-contrib-sass": "~0.4.x",
				"grunt-contrib-jshint": "~0.6.x",
				"grunt-contrib-watch": "~0.5.x",
				"jshint-stylish": "~0.1.4"
			},
		});

		// All done!
		done();
	});
};
