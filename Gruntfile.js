'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      dist: {
        src: 'client/index.js',
        dest: 'dist/js/index.js'
      }
    },

    watch: {
      files: [ 'client/**/*.js' ],
      tasks: [ 'browserify:dist' ]
    }

  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', [ 'browserify:dist' ]);
  grunt.registerTask('auto-build', ['watch']);

};