const gulp = require("gulp");
const revAll = require("gulp-rev-all");
const revDel = require("gulp-rev-delete-original");

gulp.task("revision", () => {
  return gulp
    .src("dist/projectName/**/*")
    .pipe(
      revAll.revision({
        dontRenameFile: ["index.html", "3rdpartylicenses.txt"],
        transformPath: function (rev) {
          if (!process.env.ASSET_PATH) return rev;
          return rev.replace("/assets", process.env.ASSET_PATH);
        },
      })
    )
    .pipe(revDel())
    .pipe(gulp.dest("dist/projectName"))
    .pipe(revAll.manifestFile())
    .pipe(gulp.dest("dist/projectName"));
});

gulp.task("default", gulp.series("revision"));
