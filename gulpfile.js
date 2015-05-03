var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
var del = require('del');
var shell = require('gulp-shell');
var RevAll = require('gulp-rev-all');
var htmlreplace = require('gulp-html-replace');
var size = require('gulp-size');

// DEV TASKS
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        "files": [
            "*.html",
            "js/**/*"
        ]
    });
});

gulp.task('dev', ['browser-sync']);

// BUILD TASKS
gulp.task('clean', function (cb) {
  del(['dist'], cb);
});

gulp.task('html', function () {
    gulp.src('index.html')
        .pipe(htmlreplace({
            'js': {
                src: 'js/app.js',
                tpl: '<script src="%s" async defer></script>'
            }
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('js', shell.task([
  'jspm bundle-sfx js/app dist/js/app.js --minify'
]));

gulp.task('rev', function() {
    var revAll = new RevAll({ dontRenameFile: ['.html'] });
    gulp.src('dist/**')
        .pipe(revAll.revision())
        .pipe(size({
            showFiles: true,
            gzip: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('build', function () {
    runSequence(
        'clean',
        ['html', 'js'],
        'rev'
    );
});