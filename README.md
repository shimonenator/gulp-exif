gulp-exif
=========

Extract EXIF data from photographs

## Install

```sh
$ npm install --save-dev gulp-exif
```

## Usage

```js
var gulp = require('gulp');
var exif = require('gulp-exif');

gulp.task('default', function () {
	return gulp.src('src/file.ext')
		.pipe(exif())
		.pipe(/* custom rename or filter process */)
		.pipe(gulp.dest('dist'));
});
```
## Licence

MIT © [Shimon Schwartz](https://github.com/shimonenator)
