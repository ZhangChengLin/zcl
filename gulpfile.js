const del = require('del');
const copy = require('copy');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
//path
const jquery_path = './node_modules/jquery/dist/jquery.min.js';
const bootstrap_css_path = './node_modules/bootstrap/dist/css/bootstrap.min.css';
const bootstrap_js_path = './node_modules/bootstrap/dist/js/bootstrap.min.js';
const popper_path = './node_modules/popper.js/dist/umd/popper.min.js';
const animate_path = './node_modules/animate.css/animate.min.css';

gulp.task('copy_static_js', copy_static_js);
gulp.task('copy_static_css', copy_static_css);

function copy_static_js(done) {
    gulp.src([jquery_path]).pipe(gulp.dest('./assets/js/'));
    gulp.src([bootstrap_js_path]).pipe(gulp.dest('./assets/js/'));
    gulp.src([popper_path]).pipe(gulp.dest('./assets/js/'));
    done();
}

function copy_static_css(done) {
    gulp.src([bootstrap_css_path]).pipe(gulp.dest('./assets/css/'));
    gulp.src([animate_path]).pipe(gulp.dest('./assets/css/'));
    done();
}