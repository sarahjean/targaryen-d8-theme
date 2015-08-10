var gulp = require('gulp');

// plugins
var sass = require('gulp-sass'),
  jshint = require('gulp-jshint'),
  globbing = require('gulp-css-globbing'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant');

gulp.task('lint', function () {
  return gulp.src('js-src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


gulp.task('sass', function () {
  return gulp.src(['sass/**/*.scss'])
    .pipe(globbing({
      extensions: ['.scss']
    }))
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('css'));
});


gulp.task('scripts', function () {
  return gulp.src('js-src/*.js')
    .pipe(uglify({mangle: false}))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('js'))
});

gulp.task('imagemin', function () {
  return gulp.src('img-src/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('img'));
});

gulp.task('watch', function () {
  gulp.watch('js-src/*.js', ['lint', 'scripts']);
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('img-src/*', ['imagemin']);
});

gulp.task('default', ['lint', 'sass', 'scripts', 'imagemin', 'watch']);