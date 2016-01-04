var gulp = require('gulp');
var config = require('../config').nunjucks;
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');

gulp.task('nunjucks', function() {
	nunjucksRender.nunjucks.configure(['dev/'], {
		watch: false
	});
	return gulp.src(config.src)
		.pipe(plumber({
			errorHandler: notify.onError("Error: <%= error.message %>")
		}))
		.pipe(data(function() {
	      	return require(process.cwd() + '/dev/data.json');
	    }))
		.pipe(nunjucksRender())
		.pipe(notify({
			title: 'Nunjucks',
			message: 'Template Done',
			sound: "Pop"
		}))
		.pipe(gulp.dest(config.dest));
});
