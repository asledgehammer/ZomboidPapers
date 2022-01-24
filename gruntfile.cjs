module.exports = function (grunt) {
    // Simple config to run jshint any time a file is added, changed or deleted
    grunt.initConfig({
        watch: {
            files: ['content/**'],
            tasks: ['run:npm_run_start'],
        },
        run: {
            options: {
                // ...
            },
            npm_run_start: {
                cmd: 'npm.cmd',
                args: ['run', 'start'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-run');

    grunt.registerTask('default', ['watch']);
};
