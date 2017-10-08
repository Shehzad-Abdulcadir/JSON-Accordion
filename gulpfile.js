const gulp = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const jsmin = require('gulp-jsmin');

gulp.task('watch', function() {
    gulp.watch('src/sass/*scss', ['sass']);
    gulp.watch('src/scripts/*.js', ['jshint','compile_js']);
});
 
gulp.task('sass', function() {
    return gulp.src('src/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'Sass succesfully compiled' }));
});

gulp.task('jshint', function() {
    return gulp.src('src/scripts/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('compile_js', function(){
   return gulp.src('src/scripts/*.js')
    .pipe(jsmin())
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('dist/js'));
});