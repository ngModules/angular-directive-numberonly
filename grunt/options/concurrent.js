// Run some tasks in parallel to speed up the build process
module.exports = {
  server : [
    // 'compass:server',
    'imagemin',
    'svgmin'
  ],
  test : [
  // 'compass'
  ],
  dist : [
    // 'compass:dist',
    'imagemin',
    'svgmin'
  ],
  dev : [
    'copy:fonts',
    'copy:dev'
  ]
};