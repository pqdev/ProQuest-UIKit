var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass')(require('sass'));
//var autoprefixer = require('gulp-autoprefixer'); 
// requires npm install --save-dev gulp-autoprefixer
var sourcemaps = require('gulp-sourcemaps');

var styleSRC = './src/sass/**/*.scss';
var styleDIST = './dist/css';

gulp.task('expanded', async function(cb){
    gulp.src(styleSRC)
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'expanded'
        }))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest(styleDIST))
        .on('end', cb);

});

gulp.task('compressed', function(cb){
    gulp.src( styleSRC )
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on( 'error', console.error.bind(console) )
        // .pipe(autoprefixer({                            -- ONLY USE IF NECESSARY
        //     browserslist:  ['last 2 versions'], 
        //     cascade: false
        // }))
        .pipe(rename( { suffix: '.min' } ) )
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(styleDIST))
        .on('end', cb);

});

gulp.task('default', function(){
    gulp.watch(styleSRC).on('change', gulp.series('compressed', 'expanded'));

});
