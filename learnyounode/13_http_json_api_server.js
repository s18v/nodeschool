var http = require('http')
var url = require('url')

var port = process.argv[2];

function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}

function unixtime(time) {
    return { unixtime: time.getTime() };
}

http.createServer(function (req, res) {
	/* Type the following in node command line -
	require('url').parse('/api/parsetime?iso=2013-08-10T12:10:15.474Z', true) */
    var parsedUrl = url.parse(req.url, true);
    var pathname = parsedUrl.pathname;
    //Getting the iso value of the query and setting to the date object
    var date = new Date(parsedUrl.query.iso);

    if (pathname === '/api/parsetime') {
        res.writeHead(200, { "Content-Type": "application/json" });
        // Response needs to be ended with end method. 
        // 'if' doesn't terminate otherwise.
        res.end(JSON.stringify(parsetime(date)));
    }

    else if (pathname === '/api/unixtime') {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(unixtime(date)));
    }

    else {
        res.writeHead(404);
        res.end();
    }

}).listen(port);

// OFFICIAL SOLUTION
/*
    var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime : time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))

*/