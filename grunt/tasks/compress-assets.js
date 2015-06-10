'use strict';

module.exports = function(grunt) {
  grunt.registerTask('compress-assets', [
    'clean:compressed',
    'compress:css',
    'compress:js',
    'copy:compressedassets'
  ]);
};