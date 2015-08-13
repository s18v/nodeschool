var fs = require('fs')

exports.method = function (dirName, ext, callback) {
	fs.readdir(dirName, function (err, list) {
		if (err) {
			throw new Error(err);
		}
		return callback(null, list);
	});
};