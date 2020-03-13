"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass');
const paths = require('./config/paths.json');
const sassOptions = require('./config/sassOptions.js');

gulp.task('app-watch-sass', function() {
    return gulp.watch(paths.src.default, gulp.series('app-compile-sass')).on('change', function (file) {
      console.log(`File ${file} was changed, running tasks...`);
    });
});

gulp.task('app-compile-sass', function() {
    return gulp.src(paths.src.default)
        .pipe(sass(sassOptions))
        .pipe(gulp.dest(paths.dist.default));
});

gulp.task('app-copy-assets', function() {
    return gulp.src(['./node_modules/govuk-frontend/govuk/assets/**/*']).pipe(gulp.dest('./wwwroot/govuk-assets/'));
});


gulp.task('default',  gulp.series('app-compile-sass', 'app-watch-sass'));