module.exports = function(grunt) {
   
    grunt.loadNpmTasks('grunt-slim');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/sass',
                    src: ['*.sass'],
                    dest: 'src/css',
                    ext: '.css'
                }]
            }
        },

        slim: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/slim',
                    src: ['{,*/}*.slim'],
                    dest: 'dist',
                    ext: '.html'
                }]
            }
        },

        concat: {
            dist: {
                src: [
                    'node_modules/flexboxgrid/dist/flexboxgrid.min.css',
                    'src/css/main.css',
                ],
                dest: 'dist/css/main.css',
            }
        },
        
        watch: {
            slim: {
                files: ['src/slim/**/*.slim'],
                tasks: ['slim'],
            },
            sass: {
                files: ['src/sass/**/*.sass'],
                tasks: ['sass', 'concat'],
            }
        }

    });
    
    grunt.registerTask('default', ['sass', 'slim', 'concat', 'watch']);

};
