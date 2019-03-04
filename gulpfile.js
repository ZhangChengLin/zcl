// const del = require('del');
// const copy = require('copy');
const gulp = require('gulp');
const rename = require('gulp-rename');
const terser = require('gulp-terser');
const minifycss = require('gulp-uglifycss');
// const imagemin = require('gulp-imagemin');

//path
const jquery_path = './node_modules/jquery/dist/jquery.min.js';
const bootstrap_css_path = './node_modules/bootstrap/dist/css/bootstrap.min.css';
const bootstrap_js_path = './node_modules/bootstrap/dist/js/bootstrap.min.js';
const popper_path = './node_modules/popper.js/dist/umd/popper.min.js';
const animate_path = './node_modules/animate.css/animate.min.css';
const fontawesome_css_path = './node_modules/@fortawesome/fontawesome-free/css/*';
const fontawesome_js_path = './node_modules/@fortawesome/fontawesome-free/js/*';
const fontawesome_sprites_path = './node_modules/@fortawesome/fontawesome-free/sprites/*';
const fontawesome_webfonts_path = './node_modules/@fortawesome/fontawesome-free/webfonts/*';

//
const zcl_js_path = './assets/js/zcl.js';
const zcl_css_path = './assets/css/zcl.css';

//default Task
gulp.task('copy_static_js', copy_static_js);
gulp.task('copy_static_css', copy_static_css);
gulp.task('copy_static_font', copy_static_font);

gulp.task('zcl_min_js', zcl_min_js);
gulp.task('zcl_min_css', zcl_min_css);

function zcl_min_js(done) {
    'use strict';
    gulp.src([zcl_js_path])
        .pipe(terser())
        .pipe(rename('zcl.min.js'))
        .pipe(gulp.dest('./assets/js/'));
    done();
}

function zcl_min_css(done) {
    'use strict';
    gulp.src([zcl_css_path])
        .pipe(minifycss())
        .pipe(rename('zcl.min.css'))
        .pipe(gulp.dest('./assets/css'));
    done();
}

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

function copy_static_font(done) {
    gulp.src([fontawesome_css_path]).pipe(gulp.dest('./assets/fonts/css/'));
    gulp.src([fontawesome_js_path]).pipe(gulp.dest('./assets/fonts/js/'));
    gulp.src([fontawesome_sprites_path]).pipe(gulp.dest('./assets/fonts/sprites/'));
    gulp.src([fontawesome_webfonts_path]).pipe(gulp.dest('./assets/fonts/webfonts/'));
    done();
}
