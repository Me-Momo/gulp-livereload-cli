const gulp = require("gulp"),
    less = require("gulp-less"),
    connect = require("gulp-connect")

gulp.task("less", function() {
    return gulp.src("app/less/main.less")
    .pipe(less())
    .pipe(gulp.dest("app/css"))
    .pipe(connect.reload())
})

gulp.task("watch", function(){
    gulp.src("app/**/*.*")
    .pipe(connect.reload())
})

gulp.task("default", ["watch","less"], function() {    // 这里的watch，是自定义的，写成live或者别的也行
    
    connect.server({
        livereload: true
    })

    // app/**/*.*的意思是 app文件夹下的 任何文件夹 的 任何文件
    gulp.watch("app/**/*.*", ["watch"])
    gulp.watch("app/less/**/*.less", ["less"])
})