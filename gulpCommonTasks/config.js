var build = './build';
var dev = './dev';

module.exports = {

	src: dev,
	build: build,

	nunjucks: {
		src: [dev + '/*.html', '!' + dev + '/_*.html'],
		watch: [dev + '/*.html', dev + '/**/*.html', dev + '/data.json'],
		dest: build
	},

	inliner: {
		src: [dev + '/*.html', '!' + dev + '/_*.html'],
		watch: [dev + '/*.html', dev + '/**/*.html'],
		dest: build
	},

	concatcss: {
		src: dev + '/css/*.css',
		dest: dev,
		allFile: 'styles.css',
		delStyleCompile: dev + '/styles.css'
	},

	images: {
		src: [dev + '/images/**'],
		dest: build + '/images'
	}

};
