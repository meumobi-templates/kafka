var gulp = require('gulp'),
    browserSync = require('browser-sync').create();
    args = require('yargs').argv;

// Get the port from the command line
var port = args.port || "8000";
 
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./www"
        },
        port: port
    });
});

gulp.watch('www/**/*').on('change', function () {
  browserSync.reload();
});

gulp.task('default', ['browser-sync']);