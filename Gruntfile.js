'use strict';
// script for compression the images
module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options:{
          engine: 'im',
          sizes:[{
            width: 320,
            height: 240,
            suffix: '_1x',
            quality: 30
          },{
            suffix: '_2x',
            width: 520,
            quality: 30
          },{
            suffix: '_3x',
            width: 1600,
            quality: 30
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img_src/',
          dest: 'img/'
        }]
      } 
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
