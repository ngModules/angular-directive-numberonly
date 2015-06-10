// Automatically inject Bower components into the app
module.exports = {
  target : {
    src : [
      'index.html'
    ],
    exclude : [
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap.js'
    ]
  }
};