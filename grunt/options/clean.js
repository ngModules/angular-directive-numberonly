// Empties folders to start fresh
module.exports = {
  dist : {
    options : {
      force : true
    },
    files : [
      {
        dot : true,
        src : [
          '<%= yeoman.dist %>/*',
          '!<%= yeoman.dist %>/.git*'
        ]
      }
    ]
  },
  js : {
    options : {
      force : true
    },
    files : [
      {
        dot : true,
        src : [
          '<%= yeoman.dist %>/scripts/*'
        ]
      }
    ]
  },
  css : {
    options : {
      force : true
    },
    files : [
      {
        dot : true,
        src : [
          '<%= yeoman.dist %>/styles/*'
        ]
      }
    ]
  },
  views : {
    options : {
      force : true
    },
    files : [
      {
        dot : true,
        src : [
          '<%= yeoman.dist %>/app/views/*'
        ]
      }
    ]
  },
  server : '.tmp'
};