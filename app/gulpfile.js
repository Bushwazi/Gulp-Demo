var gulp = require('gulp');
var gutil = require('gulp-util');

var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// gulp.task('default', function(){
//   // place code for your default task here
// });

gulp.task('stylus', function () {
    gulp.src('./stylus/**/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('../build/css/'));
});


gulp.task('javascript', function() {
  gulp.src(['bower_components/jquery/jquery.js', 'js/project.js'])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('../build/js/'))
});

gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('stylus/**/*.styl', ['stylus']);

  // Watch .js files
  gulp.watch('js/**/*.js', ['javascript']);


  // Watch image files
  // gulp.watch('src/images/**/*', ['images']);

});

// Default gulp task to run
gulp.task('default', ['stylus', ,'javascript']);


// http://markgoodyear.com/2014/01/getting-started-with-gulp/

