'use strict';

module.exports = function(grunt) {
  grunt.registerTask('serve', function(target) {
    if (target === 'dist') {
      return grunt.task.run([
        'build',
        'connect:dist:keepalive'
      ]);
    }

    grunt.task.run([
      'clean:dist',
      // 'bowerInstall',
      'copy:fonts',
      'concurrent:server',
      'autoprefixer',
      'copy:dev',
      // open preview
      'connect:livereload',
      'watch:dev'
    ]);
  });
};