const { src, dest } = require("gulp");
const htmlmin = require("gulp-html-minifier");
const gulp = require("gulp");
const workbox = require("workbox-build");
function minify() {
  return src("./dist/**/*.html")
    .pipe(htmlmin({ removeComments: true, collapseWhitespace: true }))
    .pipe(dest("./dist"));
}
const dist = `${__dirname}/dist`;
gulp.task("generate-service-worker", () => {
  return workbox
    .generateSW({
      globDirectory: dist,
      skipWaiting: true,
      clientsClaim: true,
      globPatterns: ["**/*.{html,js,css,png,jpg,woff,woff2,ttf,ico,jpeg,mp4}"],
      swDest: "dist/sw.js"
    })
    .then(({ warnings }) => {
      for (const warning of warnings) {
        console.warn(warning);
      }
      console.info("Service worker generation completed.");
    })
    .catch(error => {
      console.warn("Service worker generation failed:", error);
    });
});
exports.default = minify;
