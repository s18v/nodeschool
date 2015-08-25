var express = require('express')
var app = express()
var path = require('path')

// .jade is the default view engine extension to be used when omitted
app.set('view engine', 'jade');

app.set('views', process.argv[3]);
//path.join(__dirname, 'templates')

// Once the user goes to /home, render the index.jade file
app.get('/home', function (req, res) {
	res.render('index', { 
		date: new Date().toDateString() 
	});
});

app.listen(process.argv[2]);

// OFFICIAL SOLUTION
/*
var path = require('path');
var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.set('views', process.argv[3]);
app.get('/home', function (req, res) {
	res.render('index', {
		date: new Date().toDateString()
	});
});
app.listen(process.argv[2]);
*/