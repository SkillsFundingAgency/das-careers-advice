"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass');
const paths = require('./config/paths.json');
const sassOptions = require('./config/sassOptions.js');

gulp.task('app-compile-sass', function() {
return gulp.src(paths.src.default)
    .pipe(sass(sassOptions))
    .pipe(gulp.dest(paths.dist.default));
});