var gulp = require('gulp');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');

function transpile() {
  gulp.src('./src/**/*.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['es2015'],
    }
    ))
    .pipe(gulp.dest('./bld'));
}

gulp.task('transpile-js', transpile);

gulp.task('default', function() {
  transpile();
  gulp.watch('./src/**/*.js', ['transpile-js']);
});
