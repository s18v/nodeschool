var http = require('http')
var fs = require('fs')
var map = require('through2-map')

var port = process.argv[2];

// convert the chunk to uppercase
var uppercase = map(function (chunk) {
    return chunk.toString().toUpperCase();
});

http.createServer(function (req, res) {
    if (req.method == 'POST') {
        req.pipe(uppercase).pipe(res);
    }
}).listen(port);

// OFFICIAL SOLUTION

/*
    var http = require('http')
    var map = require('through2-map')
    
    var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')
    
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))
*/