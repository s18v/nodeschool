var express = require('express')
var app = express();
var port = process.argv[2];

// Route requests to '/home'
app.get('/home', function (req, res) {
	res.writeHeader(200, { 'Content-Type': 'text/html' });
	res.end("Hello World!");
});
app.listen(port);