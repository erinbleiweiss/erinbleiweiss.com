const
  gulp = require('gulp'),
  $ = require('gulp-load-plugins')();

gulp.task('images', function () {
  return gulp.src('app/static/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('public/static'));
});
