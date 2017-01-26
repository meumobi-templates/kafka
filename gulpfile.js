var gulp = require('gulp'),
  browserSync = require('browser-sync').create();
 
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./www"
        }
    });
});

gulp.watch('www/**/*').on('change', function () {
  browserSync.reload();
});

gulp.task('default', ['browser-sync']);