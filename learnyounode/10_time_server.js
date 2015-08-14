var net = require('net')
var port = process.argv[2];
var date = new Date();

net.createServer(function (socket) {
	/* socket.write(formattedTime(), 'utf8');
	socket.end(); */
	socket.end(formattedTime());
}).listen(port);

// Helper to prefix zero if the number is a single digit
function padding(n) { return (n < 10 ? '0' + n : n) }
 
// Format -> YYYY-MM-DD hh:mm 
function formattedTime() {
	return date.getFullYear() + '-'
		+ padding(date.getMonth() + 1) + '-'
		+ padding(date.getDate()) + ' '
		+ padding(date.getHours()) + ':'
		+ padding(date.getMinutes());
}


// OFFICIAL SOLUTION
/*
    var net = require('net')
    
    function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))
*/