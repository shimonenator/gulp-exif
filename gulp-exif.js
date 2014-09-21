/*jslint node: true */

"use strict";

var ExifImage = require('exif').ExifImage;
var through = require('through2');

module.exports = function () {
	return through.obj(function (file, encoding, callback) {
		new ExifImage({image: file.contents}, function (error, exifData) {
			for (var prop in exifData) {
				file[prop] = exifData[prop];
			}
				
			callback(error, file);
		});
	});
};
