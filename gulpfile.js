const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");
const minMarkup = require("gulp-htmlmin");
const uglify = require("gulp-uglify-es").default;
const minStyle = require("gulp-css");

function style() {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
}
exports.style = style;

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("src/scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("src/js/**/*.js").on("change", browserSync.reload);
}
exports.watch = watch;

function minHtml() {
  console.log("One moment I'm building HTML distribution version!");
  return gulp.src("./*.html")
  .pipe(minMarkup({ collapseWhitespace: true }))
  .pipe(gulp.dest("dist"));
}

function minCss() {
  console.log("One moment I'm building CSS distribution version!");
  return gulp.src("dist/css/**/*.css")
  .pipe(minStyle())
  .pipe(gulp.dest("dist/css"));
}
exports.minCss = minCss;

function minJs() {
  console.log("One moment I'm building JS distribution version!");
  return gulp.src("src/js/**/*.js")
  .pipe(uglify())
  .pipe(gulp.dest("dist/js"));
}
exports.minJs = minJs;

exports.build = gulp.parallel(minHtml, minCss, minJs);
