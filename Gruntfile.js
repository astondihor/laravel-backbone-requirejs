/*global module:false*/
module.exports = function(grunt) {

	"user strict";

	// Project configuration.
	grunt.initConfig({

		// Metadata.
		pkg: grunt.file.readJSON('package.json'),

		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
				' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

		// Task configuration
		copy: {
			init1: {
				files: [
					{expand: false, src: ['bower_components/jquery/dist/jquery.min.js'], dest: 'public-dev/js/vendor/jquery.min.js', filter: 'isFile'},
					{expand: false, src: ['bower_components/underscore/underscore-min.js'], dest: 'public-dev/js/vendor/underscore-min.js', filter: 'isFile'},
					{expand: false, src: ['bower_components/backbone/backbone.js'], dest: 'public-dev/js/vendor/backbone.js', filter: 'isFile'},
					{expand: false, src: ['bower_components/requirejs/require.js'], dest: 'public-dev/js/vendor/require.js', filter: 'isFile'},
					{expand: false, src: ['bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js'], dest: 'public-dev/js/vendor/bootstrap.js', filter: 'isFile'},
					{expand: false, src: ['bower_components/requirejs-text/text.js'], dest: 'public-dev/js/vendor/text.js', filter: 'isFile'}
				]
			},
			main: {
				expand: true,
				cwd: 'bower_components/bootstrap/fonts/',
				src: '**',
				dest: 'public/assets/fonts/',
				flatten: true,
				filter: 'isFile',
			},
		},


		compass: {
			dist: {
				options: {
					sassDir: 'sass',
					cssDir: 'public-dist/css',
					environtment: 'production'
				}
			},
			dev: {
				options: {
					sassDir: 'sass',
					cssDir: 'public-dev/css',
				},
			}
		},


		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: true,
				separator: ';'
			},
			dist: {
				src: ['lib/<%= pkg.name %>.js'],
				dest: 'dist/<%= pkg.name %>.js'
			},
			js_frontend: {
				src: [
					'./bower_components/jquery/jquery.js',
					'./bower_components/bootstrap/dist/js/bootstrap.js',
					'./app/assets/javascript/frontend.js'
				],
				dest: './public/assets/javascript/frontend.js',
			},
			js_backend: {
				src: [
					'./bower_components/jquery/jquery.js',
					'./bower_components/bootstrap/dist/js/bootstrap.js',
					'./app/assets/javascript/backend.js'
				],
				dest: './public/assets/javascript/backend.js',
			},
		},


		uglify: {
			options: {
				banner: '<%= banner %>',
				mangle: false  // Use if you want the names of your functions and variables unchanged
			},
			dist: {
				src: '<%= concat.dist.dest %>',
				dest: 'dist/<%= pkg.name %>.min.js'
			},
			frontend: {
				files: {
					'./public/assets/javascript/frontend.js': './public/assets/javascript/frontend.js',
				}
			},
			backend: {
				files: {
					'./public/assets/javascript/backend.js': './public/assets/javascript/backend.js',
				}
			},
		},


		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				unused: true,
				boss: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true
				}
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			lib_test: {
				src: ['lib/**/*.js', 'test/**/*.js']
			}
		},


		qunit: {
			files: ['test/**/*.html']
		},


		phpunit: {
			classes: {
				dir: 'app/tests/'   //location of the tests
			},
			options: {
				bin: 'vendor/bin/phpunit',
                colors: true
			}
		},


		watch: {
			gruntfile: {
				files: '<%= jshint.gruntfile.src %>',
				tasks: ['jshint:gruntfile']
			},
			js_frontend: {
				files: [
					//watched files
					'./bower_components/jquery/jquery.js',
					'./bower_components/bootstrap/dist/js/bootstrap.js',
					'./app/assets/javascript/frontend.js'
				],
				tasks: ['concat:js_frontend','uglify:frontend'],
				options: {
					livereload: true                        //reloads the browser
				}
			},
			js_backend: {
				files: [
					//watched files
					'./bower_components/jquery/jquery.js',
					'./bower_components/bootstrap/dist/js/bootstrap.js',
					'./app/assets/javascript/backend.js'
				],
				tasks: ['concat:js_backend','uglify:backend'],     //tasks to run
				options: {
					livereload: true                        //reloads the browser
				}
			},
			compass: {
				files: ['./app/assets/stylesheets/*.scss'],  //watched files
				tasks: ['compass'],                          //tasks to run
				options: {
					livereload: true                        //reloads the browser
				}
			},
			lib_test: {
				files: '<%= jshint.lib_test.src %>',
				tasks: ['jshint:lib_test', 'qunit']
			},
			tests: {
				files: ['app/controllers/*.php','app/models/*.php'],  //the task will run only when you save files in this location
				tasks: ['phpunit']
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-phpunit');

	// Default task.
	grunt.registerTask('init', ['copy', 'compass', 'concat', 'uglify']);
	grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

	grunt.registerTask('compass-dev', ['compass:dev']);
	grunt.registerTask('build', []);

};
