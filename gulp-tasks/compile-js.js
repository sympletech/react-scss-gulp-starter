const gulp = require('gulp');
const logger = require('gulp-logger');
const watch = require('gulp-watch');
const rollup_stream = require('rollup-stream');
const buffer = require('vinyl-buffer');
const rename = require('gulp-rename');
const rollup_plugin_babel = require('rollup-plugin-babel');
const babel_plugin_external_helpers = require('babel-plugin-external-helpers');

const babel_preset_stage_0 = require('babel-preset-stage-0');
const babel_preset_react = require('babel-preset-react');
const rollup_plugin_node_resolve = require('rollup-plugin-node-resolve');
const rollup_plugin_commonjs = require('rollup-plugin-commonjs');
const rollup_plugin_replace = require('rollup-plugin-replace');
const rollup_plugin_uglify = require('rollup-plugin-uglify');
const rollup_plugin_node_globals = require('rollup-plugin-node-globals');
const babel_preset_env = require('babel-preset-env');
const babel_preset_es2015 = require('babel-preset-es2015');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');

const pkg = require('../package.json');

function compileJs() {
	compileJsFile({rootJs: `./${pkg.gulp_config.src_path}/app.js`, saveAs: `app.js`});
}

function compileJsFile({rootJs, saveAs}) {
	rollup_stream({
		input: rootJs,
		format: 'iife',
		name: pkg.gulp_config.build_name,
		sourcemap: true,
		plugins: [
			rollup_plugin_babel({
				babelrc: false,
				exclude: 'node_modules/**',
				plugins: [
					babel_plugin_external_helpers
				],
				presets: [
					[babel_preset_env, {
						modules: false,
						targets: {
							"browsers": ['last 2 versions', 'Safari >6', 'IE > 10']
						}
					}],
					babel_preset_stage_0,
					babel_preset_react
				]
			}),
			rollup_plugin_commonjs({
				exclude: 'node_modules/process-es6/**',
				include: [
					'node_modules/**',
					'node_modules/create-react-class/**',
					'node_modules/fbjs/**',
					'node_modules/history/**',
					'node_modules/object-assign/**',
					'node_modules/react/**',
					'node_modules/react-dom/**',
					'node_modules/react-redux/**',
					'node_modules/react-router-redux/**',
					'node_modules/redux/**',
					'node_modules/prop-types/**'
				]
			}),
			rollup_plugin_node_globals(),
			rollup_plugin_replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
			rollup_plugin_node_resolve({
				browser: true,
				main: true
			}),



			// rollup_plugin_uglify(false)
		]
	}).pipe(
		source(`./${pkg.main}`)
	).pipe(logger({
		before: 'Compiling JS',
		after: 'Compiling JS complete!',
		showChange: false
	})).pipe(
		buffer()
	).pipe(
		sourcemaps.init({
			loadMaps: true
		})
	).pipe(
		rename(saveAs)
	).pipe(
		sourcemaps.write('.')
	).pipe(
		gulp.dest(pkg.gulp_config.build_path)
	)
}

gulp.task('compile-js', () => {
	compileJs();
});

gulp.task('watch-js', () => {
	console.log('watching js...');
	compileJs();
	const jsGlob = `${pkg.gulp_config.src_path}/**/*.js`;
	watch(jsGlob, () => {
		compileJs();
	});
});
