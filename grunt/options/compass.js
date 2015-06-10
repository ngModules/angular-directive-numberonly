// Compiles Sass to CSS and generates necessary files if requested
module.exports = {
  options : {
    sassDir : 'styles/sass',
    cssDir : 'styles',
    generatedImagesDir : '.tmp/images/generated',
    imagesDir : 'images',
    javascriptsDir : 'scripts',
    fontsDir : 'styles/fonts',
    importPath : 'bower_components',
    httpImagesPath : '/images',
    httpGeneratedImagesPath : '/images/generated',
    httpFontsPath : '/styles/fonts',
    relativeAssets : false,
    assetCacheBuster : false,
    raw : 'Sass::Script::Number.precision = 10\n'
  },
  dist : {
    options : {
      generatedImagesDir : '<%= yeoman.dist %>/assets/images/generated'
    }
  },
  server : {
    options : {
      generatedImagesDir : '<%= yeoman.dist %>/assets/images/generated',
      debugInfo : false
    }
  }
};