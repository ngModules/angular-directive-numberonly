'use strict';

module.exports = function(grunt) {
  grunt.registerTask('dev', [
    'compass:server',
    'concurrent:dev'
  ]);
};