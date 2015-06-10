'use strict';

module.exports = function(grunt) {
  function loadConfig(path) {
    var glob = require('glob'), object = {};

    glob.sync('*', {
      cwd : path
    }).forEach(function(option) {
      var key = option.replace(/\.js$/, ''), data = require(path + option);
      object[key] = typeof data === 'function' ? data(grunt) : data;
    });

    return object;
  }

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  grunt.loadTasks('grunt/tasks');
  
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  var config = {
    // Project settings
    yeoman : {
      // configurable paths
      app : require('./package.json').appPath || '',
      dist : 'dist'
    }
  };

  grunt.util._.extend(config, loadConfig('./grunt/options/'));
  grunt.initConfig(config);



  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-ng-constant');
  grunt.loadNpmTasks('grunt-cdn');
  grunt.loadNpmTasks('grunt-contrib-compress');

};
