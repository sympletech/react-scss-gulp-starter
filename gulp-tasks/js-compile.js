const gulp = require('gulp');
const watch = require('gulp-watch');
const webpack = require('webpack-stream');
const logger = require('gulp-logger');

const pkg = require('../package.json');

function compileWebpack(env) {
	process.env.NODE_ENV = env;
	return gulp.src(`./${pkg.gulp_config.src_path}/app.js`)
		.pipe(logger({
			before: 'Starting compileWebpack - ' + new Date(),
			after: 'compileWebpack complete - ' + new Date(),
			showChange: false
		}))
		.pipe(webpack({
			output: {
				filename: 'app.js'
			},
			devtool: 'cheap-module-source-map',
			module: {
				rules: [
					{
						test: /js$/,
						exclude: /(node_modules)/,
						loader: 'babel-loader',
						query: {presets: ['react-app']}
					}
				]
			}
		}))
		.pipe(gulp.dest(`./${pkg.gulp_config.build_path}/`));
}

gulp.task('watch-js', () => {
	compileWebpack("development");
	watch(`${pkg.gulp_config.src_path}/**/*.js`, () => {
		compileWebpack("development");
	});
});

gulp.task('build-js', () => {
	compileWebpack("production");
});
