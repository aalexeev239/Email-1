var gulp = require('gulp');
var runSequence = require('run-sequence');

// Default task
gulp.task('default', function(cb) {
	runSequence(
		'nunjucks',
		'concatcss',
		['images'],
		'inliner', 
		'watch',
		cb
	);
});
