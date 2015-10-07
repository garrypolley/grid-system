module.exports = function(grunt) {
  var lessFile = 'src/index.less';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      scripts: {
        files: ['src/**/*'],
        tasks: ['less:build', 'less:example'],
        options: {
          spawn: false
        }
      }
    },

    less: {
      build: {
        options: {
          sourceMap: true,
          compress: true,
          outputSourceFiles: true,
          sourceMapFilename: 'build/grid-system.css.map'
        },
        files: {
          'build/grid-system.css': lessFile
        }
      },

      example: {
        options: {
          sourceMap: true,
          compress: false,
          outputSourceFiles: true,
          sourceMapFilename: 'example/css/grid-system.css.map'
        },
        files: {
          'example/css/grid-system.css': lessFile,
        }
      }
    }
  });

  // Load in less
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['less:build', 'less:example', 'watch']);

};
