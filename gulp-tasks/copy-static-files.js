const gulp = require("gulp");
const watch = require('gulp-watch');
const logger = require('gulp-logger');

const pkg = require('../package.json');

const staticGlob = ['html', 'css', 'json'].map((ext) => `${pkg.gulp_config.src_path}/**/*.${ext}`);

function copyStaticFiles(staticPaths) {
	gulp.src(staticPaths, {base: pkg.gulp_config.src_path})
		.pipe(logger({
			before: 'Copying static files...' + new Date(),
			after: 'Copying static files complete!' + new Date(),
			showChange: true
		}))
		.pipe(gulp.dest(pkg.gulp_config.build_path));
}

gulp.task('copy-static-files', () => {
	copyStaticFiles(staticGlob);
});

gulp.task('watch-static-files', () => {
	copyStaticFiles(staticGlob);
	watch(staticGlob, (modFile) => {
		copyStaticFiles([modFile.path]);
	});
});

