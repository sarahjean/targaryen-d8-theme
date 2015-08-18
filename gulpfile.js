var gulp = require('gulp');

/**
 * *************************
 * Plugins
 * *************************
 */

var sass = require('gulp-sass'),
  jshint = require('gulp-jshint'),
  globbing = require('gulp-css-globbing'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  rename = require('gulp-rename'),
  sprity = require('sprity'),
  gulpif = require('gulp-if'),
  debug = require('gulp-debug'),
  kss = require('gulp-kss');

/**
 * *************************
 * SASS Utilities
 * *************************
 */

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

/**
 * *************************
 * JS Utilities
 * *************************
 */

gulp.task('scripts', function () {
  return gulp.src('js-src/*.js')
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest('js'))
});

// only linting on our file for now
gulp.task('lint', function () {
  return gulp.src('js-src/theme.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// copy plugins folder
gulp.task('js-plugins', function () {
  return gulp.src('js-src/plugins/*.js')
    .pipe(gulp.dest('js/plugins'));
});

/**
 * *************************
 * IMG Utilities
 * *************************
 */

// Sprites
gulp.task('sprites', function () {
  return sprity.src({
    src: 'img-src/sprite/**/*.png',
    style: 'sass/_sprite.scss',
    processor: 'sass'
  }).pipe(gulpif('*.png', gulp.dest('img/'), gulp.dest('sass/')));
});


// Image min
gulp.task('imagemin', function () {
  return gulp.src('img-src/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('img'));
});

/**
 * *************************
 * KSS tests
 * *************************
 */

/*gulp.task('kss', function () {
  return gulp.src(['sass/!**!/!*.scss'])
    .pipe(globbing({
      extensions: ['.scss']
    }))
    .pipe(kss({
      overview: 'styleguide/styleguide.md'
    }))
    .pipe(gulp.dest('styleguide/'));
});*/

/**
 * *************************
 * Primary Tasks
 * *************************
 */

gulp.task('watch', function () {
  gulp.watch('js-src/*.js', ['lint', 'scripts']);
  gulp.watch('js-src/plugins/*.js', ['js-plugins']);
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('img-src/sprite/*.png', ['sprites']);
  gulp.watch('img-src/*', ['imagemin']);
});

gulp.task('default', [
  'lint',
  'sass',
  'scripts',
  'js-plugins',
  'sprites',
  'imagemin',
  'watch'
]);