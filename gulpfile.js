var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass')(require('sass'));
var clean = require('gulp-clean');
var wait = require('gulp-wait');
//var autoprefixer = require('gulp-autoprefixer'); 
// requires npm install --save-dev gulp-autoprefixer
var sourcemaps = require('gulp-sourcemaps');

var styleSRC = './src/sass/**/*.scss';
var destination = './dist';

gulp.task('purge', async function() {
    return gulp.src('dist/', { read: false, allowEmpty: true }).pipe(clean());
});

gulp.task('copy-images', async function() {
    return gulp.src(['src/images/**']).pipe(wait(1000)).pipe(gulp.dest(`${destination}/images`));
});

gulp.task('copy-fonts', async function() {
    return gulp.src(['src/fonts/**/*']).pipe(wait(1000)).pipe(gulp.dest(`${destination}/fonts`));
})

gulp.task('expanded-styles', async function(cb) {
    gulp.src(styleSRC)
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'expanded',
            includePaths: ['./node_modules/']
        }))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest(`${destination}/css`))
        .on('end', cb);
});

gulp.task('compressed-styles', async function(cb) {
    gulp.src( styleSRC )
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed',
            includePaths: ['./node_modules/']
        }))
        .on( 'error', console.error.bind(console) )
        // .pipe(autoprefixer({                            -- ONLY USE IF NECESSARY
        //     browserslist:  ['last 2 versions'], 
        //     cascade: false
        // }))
        .pipe(rename( { suffix: '.min' } ) )
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(`${destination}/css`))
        .on('end', cb);
});

gulp.task('expanded', gulp.series('purge', 'copy-images', 'copy-fonts', 'expanded-styles'));

gulp.task('compressed', gulp.series('purge', 'copy-images', 'copy-fonts', 'compressed-styles'));

gulp.task('compile', gulp.series('purge', 'copy-images', 'copy-fonts', 'expanded-styles', 'compressed-styles'));

gulp.task('default', function() {
    gulp.watch(styleSRC).on('change', gulp.series('expanded-styles', 'compressed-styles'));
});
