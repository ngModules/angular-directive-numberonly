'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: {
      // configurable paths
      app: require('./package.json').appPath || '',
      dist: 'dist'
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all']
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test']
      },
      compass: {
        files: ['styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server','autoprefixer']
      },
      views: {
        files: ['app/views/{,*/}*.html'],
        tasks: [
          'clean:views',
          'useminPrepare',
          'concat',
          'copy:views',
          'rev',
          'usemin',
          'htmlmin'
        ]
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      dev: {
        files: [
          '{,*/}*.html',
          'assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          'views/{,*/}*.html',
          'styles/{,*/}*.{scss,sass}',
          'scripts/{,*/}*.js',
          'bower_components/{,*/}*.js'
        ],
        tasks: [
          'clean:dist',
          //'bowerInstall',
          'copy:fonts',
          'concurrent:server',
          'autoprefixer',
          'copy:dev'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= yeoman.app %>'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js'
      ],
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        options: { force: true },
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      js: {
        options: { force: true },
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/scripts/*'
          ]
        }]
      },
      css: {
        options: { force: true },
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/styles/*'
          ]
        }]
      },
      views: {
        options: { force: true },
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/app/views/*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    'bowerInstall': {
      target: {
        src: [
          'index.html'
        ],
        exclude: ['bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap.js']
      }
    },




    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: 'styles/sass',
        cssDir: 'styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: 'images',
        javascriptsDir: 'scripts',
        fontsDir: 'styles/fonts',
        importPath: 'bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/assets/images/generated'
        }
      },
      server: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/assets/images/generated',
          debugInfo: false
        }
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/styles/{,*/}*.css',
            '<%= yeoman.dist %>/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
            //'<%= yeoman.dist %>/styles/fonts/*'
          ]
        }
      },
      ngtemplates: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/templates.js'
          ]
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: ['index.html'],
      options: {
        dest: '<%= yeoman.dist %>'
      },
      flow: {
        html: {
          steps: {
            js: ['concat', 'uglifyjs'],
            css: ['cssmin']
          },
          post: {}
        }
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html', '<%= yeoman.dist %>/app/views/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/assets/images']
      }
    },
    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        options: { force: true },
        files: [{
          expand: true,
          cwd: 'assets/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/assets/images'
        }]
      }
    },
    svgmin: {
      dist: {
        options: { force: true },
        files: [{
          expand: true,
          cwd: 'assets/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/assets/images'
        }]
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'app/views/{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      },
      ngtemplates : {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['app/views/{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      },
      mainviews : {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          //cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
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
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/assets/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: '.tmp/styles/',
          dest: '<%= yeoman.dist %>/styles',
          src: [
            '**/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/concat/scripts/',
          dest: '<%= yeoman.dist %>/scripts',
          src: [
            '**/*'
          ]
        }, {
          expand: true,
          cwd: 'bower_components/components-font-awesome',
          dest: '<%= yeoman.dist %>',
          src: [
            'fonts/*'
          ]
        }, {
          expand: true,
          cwd: 'bower_components/bootstrap',
          dest: '<%= yeoman.dist %>',
          src: [
            'fonts/*'
          ]
        }]
      },

      dev: {
        files: [{
          expand: true,
          dot: true,
          //cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.app %>',
          src: [

          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.app %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: '.tmp/styles/',
          dest: 'styles',
          src: [
            '**/*'
          ]
        }]
      },
      js: {
        expand: true,
        cwd: 'source/',
        dest: 'backup/',
        src: [
          '**/*.js'
        ]
      },
      css: {
        expand: true,
        cwd: 'source/',
        dest: 'backup/',
        src: [
          '**/*.css'
        ]
      },
      fonts: {
        expand: true,
        cwd: 'bower_components/fontawesome/fonts',
        dest: '<%= yeoman.dist %>/styles/fonts/',
        src: '*'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        //'compass:server',
        'imagemin',
        'svgmin'
      ],
      test: [
        //'compass'
      ],
      dist: [
        //'compass:dist',
        'imagemin',
        'svgmin'
      ],
      dev : [
        'copy:fonts',
        'copy:dev'
      ]
    },

    // Test settings
    
    less: {
      dist: {
        options: {
          paths: ["styles/css"]
        },
        files: {
          "styles/css/theme.css": "styles/less/theme.less"
        }
      }
    },
    compress: {
      css: {
        options: {
          mode: 'gzip'
        },
        files: [
          {
            expand: true,
            cwd: 'source',
            dest: 'source',
            src: [
              '**/*.css'
            ],
            ext: '.gz.js'
          }
        ]
      },
      js: {
        options: {
          mode: 'gzip'
        },
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.app %>/source',
            dest: '<%= yeoman.app %>/source',
            src: [
              '**/*.js'
            ],
            ext: '.gz.js'
          }
        ]
      }
    }
  });


  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:dist',
      //'bowerInstall',
      'copy:fonts',
      'concurrent:server',
      'autoprefixer',
      'copy:dev',
      //open preview
      'connect:livereload',
      'watch:dev'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('dev', [
    'compass:server',
    'concurrent:dev'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'clean:server',
    //'compass:dist',
    'useminPrepare',
    'concurrent:server',
    //'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    //'cdnify',
    'cssmin',
    'uglify',
    //'rev',
    'usemin',
    //'htmlmin'
  ]);

  grunt.registerTask('default', [
    //'newer:jshint',
    //'test',
    'build'
  ]);
  
  grunt.registerTask('compress-assets', [
    'clean:compressed',
    'compress:css',
    'compress:js',
    'copy:compressedassets'
  ]);

  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-ng-constant');
  grunt.loadNpmTasks('grunt-cdn');
  grunt.loadNpmTasks('grunt-contrib-compress');

};
