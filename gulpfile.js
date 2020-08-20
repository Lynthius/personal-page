const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify-es").default;
const concat = require("gulp-concat");
// const minCss = require("gulp-css");

// Compile scss to css
function style() {
  // 1. Where is my scss file?
  return (
    gulp
      .src("./src/scss/**/*.scss")
      // 2. Pass that file through sass compiler
      .pipe(sass().on("error", sass.logError))
      // 3. Where do I save the compiled css?
      .pipe(gulp.dest("./public/css"))
      // 4. Stream changes to all browsers
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./src/scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./src/js/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;

// Uglify JS
gulp.task("uglify", async function () {
    gulp
      .src(["./src/js/**/*.js"])
      .pipe(uglify())
      .pipe(gulp.dest("./public/js"));
  });