module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        copy: {
            main: {
                options: {
                    process: function (content, srcpath) {
                        return content.replace("js/production.js","js/production.min.js");

                    },
                    noProcess: ['*/*/*.{png,gif,jpg,ico}', '*/*.{png,gif,jpg,ico}', 'fonts/*']
                },
                files: [
                    {src: ['index.html'], dest: 'build/'},
                    {src: ['styles/styles.css'], dest: 'build/'},
                    {src: ['js/production.min.js'], dest: 'build/'},
                    {src: ['img/*/*'], dest: 'build/'},
                    {src: ['fonts/*'], dest: 'build/'}

                ]
            }
        },

        clean: {
            build: {
                src: [ 'build' ]
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'styles/styles.css': 'styles/styles.scss'
                }
            }
        },

        watch: {
            css: {
                files: ['styles/*.scss', 'styles/*/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            },

            scripts: {
                files: ['js/*.js'],
                tasks: ['concat'],
                options: {
                    spawn: false
                }
            }
        },

        concat: {
            dist: {
                src: [
                    'js/jquery.carouFredSel-6.2.0-packed.js',
                    'js/script.js'
                ],
                dest: 'js/production.js'
            }
        },

        uglify: {
            build: {
                src: 'js/production.js',
                dest: 'js/production.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build',[ 'clean', 'uglify', 'copy']);
};