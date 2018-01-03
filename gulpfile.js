const gulp = require('gulp');

require('require-dir')('./gulp-tasks');

gulp.task('default', ["clean-dist", "watch-js", "watch-scss", "watch-static-files", "watch-es-lint", "web-server"], ()=>{});
gulp.task('build', ["clean-dist", "build-js", "build-scss", "copy-static-files"], () => {});
