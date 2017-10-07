const gulp = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('watch', function() {
    gulp.watch('src/sass/*scss', ['sass']);
});
 
gulp.task('sass', function() {
    return gulp.src('src/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError))
    //.pipe(autoprefixer())
    // minify
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'Sass succesfully compiled' }));
});

// new gulp task to compile JS using babel.
//concatenate
//minify uglyfy