var fs = require('fs')

var file = process.argv[2];

// Mention encoding (utf8) to return string directly instead of buffer
// Callback returns 'data'
fs.readFile(file, 'utf8', function (err, content) {
	if (err) throw err;
	console.log(content.split('\n').length - 1);
});