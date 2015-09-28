
gulp = require 'gulp'

# Install task
gulp.task('install', ->
    console.log 'Installing'
)

# Run task
gulp.task('run', ->
    console.log 'Running'
)

# Default task
gulp.task 'default', ['install', 'run']
