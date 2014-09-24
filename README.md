gulp-exif
=========

Extract EXIF data from photographs

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [ToDo](#todo)
- [Licence](#licence)

## Installation

```sh
$ npm install --save-dev gulp-exif
```

## Usage

`gulp-exif` adds exif property to the `file` as it is returned by the [`node-exif`](https://www.npmjs.org/package/exif).

```js
var gulp = require('gulp');
var exif = require('gulp-exif');

gulp.task('default', function () {
	return gulp.src('src/**.jpg')
		.pipe(exif())
		.pipe(/* custom rename or filter process */)
		.pipe(gulp.dest('rename-dest'));
});
```

## ToDo

- Proper error handling
- Proper Stream and Buffer handling
- Test coverage

## Licence

MIT © [Shimon Schwartz](https://github.com/shimonenator)
