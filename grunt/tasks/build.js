'use strict';

module.exports = function(grunt) {
  grunt.registerTask('build', [
    'clean:dist',
    'clean:server',
    // 'compass:dist',
    'useminPrepare',
    'concurrent:server',
    // 'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    // 'cdnify',
    'cssmin',
    'uglify',
    // 'rev',
    'usemin',
  // 'htmlmin'
  ]);
};