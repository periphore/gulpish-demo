'use strict';

const gulp = require('gulp'),
  gulpish = require('gulpish')(gulp),
  taskListing = require('gulp-task-listing');

gulp.task('help',
  taskListing.withFilters(null, 'default|help')
);
