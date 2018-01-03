const gulp = require('gulp');
const webpack = require('webpack-stream');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');

const pkg = require('../package.json');

gulp.task('webpack-compile', () => {
	process.env.NODE_ENV = "development";
	return gulp.src(`./${pkg.gulp_config.src_path}/app.js`)
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
});