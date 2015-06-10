// Copies remaining files to places other tasks can use
module.exports = {
  dist : {
    files : [
      {
        expand : true,
        dot : true,
        // cwd: '<%= yeoman.app %>',
        dest : '<%= yeoman.dist %>',
        src : [
          '*.{ico,png,txt}',
          '.htaccess',
          '*.html',
          'app/views/{,*/}*.html',
          'scripts/**/*',
          'assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          'fonts/*',
          'styles/*',
          'assets/images/**/*',
          'i18n/**/*'
        ]
      },
      {
        expand : true,
        cwd : '.tmp/images',
        dest : '<%= yeoman.dist %>/assets/images',
        src : [
          'generated/*'
        ]
      },
      {
        expand : true,
        cwd : '.tmp/styles/',
        dest : '<%= yeoman.dist %>/styles',
        src : [
          '**/*'
        ]
      },
      {
        expand : true,
        cwd : '.tmp/concat/scripts/',
        dest : '<%= yeoman.dist %>/scripts',
        src : [
          '**/*'
        ]
      },
      {
        expand : true,
        cwd : 'bower_components/components-font-awesome',
        dest : '<%= yeoman.dist %>',
        src : [
          'fonts/*'
        ]
      },
      {
        expand : true,
        cwd : 'bower_components/bootstrap',
        dest : '<%= yeoman.dist %>',
        src : [
          'fonts/*'
        ]
      }
    ]
  },

  dev : {
    files : [
      {
        expand : true,
        dot : true,
        // cwd: '<%= yeoman.app %>',
        dest : '<%= yeoman.app %>',
        src : [

        ]
      },
      {
        expand : true,
        cwd : '.tmp/images',
        dest : '<%= yeoman.app %>/images',
        src : [
          'generated/*'
        ]
      },
      {
        expand : true,
        cwd : '.tmp/styles/',
        dest : 'styles',
        src : [
          '**/*'
        ]
      }
    ]
  },
  fonts : {
    expand : true,
    cwd : 'bower_components/fontawesome/fonts',
    dest : '<%= yeoman.dist %>/styles/fonts/',
    src : '*'
  }
};