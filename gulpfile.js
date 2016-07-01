var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('css', function() {
  return gulp.src('app/css/**/*.css')
  .pipe(cssnano())
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.reload({
    stream: true
  }))

});

gulp.task('html', function() {
  return gulp.src('app/*.html')
          .pipe(htmlmin({collapseWhitespace:true}))
          .pipe(gulp.dest('dist'))
          .pipe(browserSync.reload({
            stream: true
          }))
});

gulp.task('images', function() {
  return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('useref',function () {
  return gulp.src('app/*.html')
  .pipe(useref())
  .pipe(gulpIf('*.js',uglify()))
  .pipe(gulpIf('*.css', cssnano()))
  .pipe(gulp.dest('dist'))
})

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
})

gulp.task('cache:clear', function(callback) {
  return cache.clearAll(callback)
})

gulp.task('watch', ['useref','css', 'sass', 'html','browserSync'],function() {
  gulp.watch('app/css/**/*.css',browserSync.reload);
  gulp.watch('app/*.html',browserSync.reload);
  gulp.watch('app/js/**/*.js',browserSync.reload);
  gulp.watch('app/scss/**/*.scss',browserSync.reload);

});

gulp.task('chew', function(callback) {
  console.log("Deleting Distro")
  runSequence('clean:dist',['css','useref','fonts'], callback)
});

gulp.task('default', function(callback) {
  runSequence('chew',['css','browserSync','watch'],
  callback
)});
