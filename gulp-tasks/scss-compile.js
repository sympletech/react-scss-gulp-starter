const gulp = require("gulp");
const sass = require("gulp-sass");
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const logger = require('gulp-logger');

const pkg = require('../package.json');

function compileScss() {
	gulp.src(`${pkg.gulp_config.src_path}/app.scss`, {base: pkg.gulp_config.src_path})
		.pipe(logger({
			before: 'Starting compileScss - ' + new Date(),
			after: 'compileScss complete - ' + new Date(),
			showChange: false
		}))
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.identityMap())
		.pipe(sassGlob())
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(pkg.gulp_config.build_path));
}

gulp.task('watch-scss', () => {
	compileScss();
	watch(`${pkg.gulp_config.src_path}/**/*.scss`, () => {
		compileScss();
	});
});

gulp.task('build-scss', () => {
	compileScss();
});
