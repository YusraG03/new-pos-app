const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const through2 = require('through2');
const fs = require('fs');
const path = require('path');

// Inline JS & CSS into <script> and <style>
function injectAssets() {
  return through2.obj((file, _, cb) => {
    let html = file.contents.toString();

    const js = fs.readFileSync('./dist/assets/index.js', 'utf8');
    const css = fs.readFileSync('./dist/assets/index.css', 'utf8');

    html = html.replace('</head>', `<style>${css}</style></head>`);
    html = html.replace('</body>', `<script type="module">${js}</script></body>`);

    file.contents = Buffer.from(html);
    cb(null, file);
  });
}

gulp.task('build-netSuite', () => {
  return gulp.src('./dist/index.html')
    .pipe(injectAssets())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./netsuite-build'));
});
