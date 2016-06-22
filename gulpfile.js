'use strict';

// Require
var gulp = require('gulp'),  
    less = require('gulp-less'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');


// Paths
var paths = {  
    'dev': {
        'less': './assets/less/',
        'js': './assets/js/',
        'vendor': './assets/vendor/'
    },
    'production': {
        'css': './public/assets/css/',
        'js': './public/assets/js/'
    }
};


// CSS
gulp.task('css', function() {  
    return gulp.src(paths.dev.less+'application.less')
        .pipe(less())
        .pipe(gulp.dest(paths.production.css))
        .pipe(minify({keepSpecialComments:0}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.production.css))
        .pipe(notify("CSS compilation successful!"));
});


// JS
gulp.task('js', function(){  
    return gulp.src([
        // paths.dev.vendor+'jquery/dist/jquery.js',
        paths.dev.js+'application.js'
    ])
    .pipe(concat('application.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.production.js))
    .pipe(notify("JS compilation successful!"));
});


// Tasks
gulp.task('watch', function() {  
    gulp.watch(paths.dev.less + '/*.less', ['css']);
    gulp.watch(paths.dev.less + '/*/*.less', ['css']);
    gulp.watch(paths.dev.js + '/*.js', ['js']);
    gulp.watch(paths.dev.js + '/*/*.js', ['js']);
});

gulp.task('default', ['css', 'js']);  