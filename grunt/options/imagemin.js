// The following *-min tasks produce minified files in the dist folder
module.exports = {
  dist : {
    options : {
      force : true
    },
    files : [
      {
        expand : true,
        cwd : 'assets/images',
        src : '{,*/}*.{png,jpg,jpeg,gif}',
        dest : '<%= yeoman.dist %>/assets/images'
      }
    ]
  }
};