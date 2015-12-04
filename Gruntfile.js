'use strict';

module.exports = function(grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Configurable paths for the application
	var appConfig = require('./bower.json');

	// Helper function to reduce repetition
	var colors = ['blue', 'green', 'olive', 'purple', 'teal'];

	var lessColorsSrc = function() {
		var all = [];
		colors.forEach(function(item) {
			all.push('uxframework-' + item + '.less')
		});
		return all;
	};

	var lessConfig = function() {
		return {
			expand: true,
			cwd: 'src/less/',
			src: lessColorsSrc(),
			dest: '.tmp/css/',
			ext: '.css'
		};
	};

	// Define the configuration for all the tasks
	grunt.initConfig({

		// Project settings
		bower: appConfig,

		// Empties folders to start fresh
		clean: {
			tmp: {
				files: [
					{
						dot: true,
						src: [
							'.tmp'
						]
					}
				]
			},
			dist: {
				files: [
					{
						dot: true,
						src: [
							'dist/{,*/}*'
						]
					}
				]
			}
		},

		// Add vendor prefixed styles
		autoprefixer: {
			options: {
				browsers: ['last 2 version', 'ie 8', 'ie 9', 'ie 10']
			},
			dist: {
				files: [
					{
						expand: true,
						cwd: '.tmp/',
						src: '**/uxframework*.css',
						dest: '.tmp/'
					}
				]
			}
		},

		cssmin: {
			options: {
				report: 'gzip',
				sourceMap: true
			},
			files: {
				expand: true,
				cwd: '.tmp/css/',
				src: 'uxframework*.css',
				dest: '.tmp/css/',
				ext: '.min.css'
			}
		},

		// Compile the UX Framework LESS files
		less: {
			options: {
				compile: true,
				banner: '/* <%= bower.name %> v<%= bower.version %>. Updated <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM TT Z") %> */'
			},
			all: lessConfig()
		},

		compress: {
			// Package /dist/.
			download: {
				options: {
					archive: 'download/<%= bower.name %>-<%= bower.version %>.zip'
				},
				files: [
					{src: ['dist/**']}
				]
			}
		},

		// Copies remaining files to places other tasks can use
		copy: {
			uikitTmp: {
				expand: true,
				cwd: 'src/',
				src: ['fonts/**', 'images/**'],
				dest: '.tmp/'
			},
			bsTmp: {
				expand: true,
				cwd: 'bower_components/bootstrap/dist',
				src: ['fonts/*', 'css/**', '!css/*theme*', 'js/bootstrap.min.js'],
				dest: '.tmp/'
			},
			uikitDist: {
				expand: true,
				cwd: '.tmp/',
				src: '**',
				dest: 'dist/'
			}
		},

		// Run some tasks in parallel to speed up the build process
		concurrent: {
			uikit: [
				'less:all',
				'copy:uikitTmp',
				'copy:bsTmp'
			]
		}
	});

	/**
	 * UIKit task compiles UIKit, creates the downloadable Zip.
	 */
	grunt.registerTask('uikit', ['default']);

	grunt.registerTask('default', [
		'clean:tmp',
		'clean:dist',
		'concurrent:uikit',
		'autoprefixer',
		'cssmin',
		'copy:uikitDist',
		'compress',
		'clean:tmp'
	]);
};
