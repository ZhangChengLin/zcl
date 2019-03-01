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
const popper_path = './node_modules/bootstrap/dist/umd/popper.min.js';

