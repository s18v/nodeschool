var http = require('http')

var url = process.argv[2];

http.get(url, function (res) {
	res.setEncoding('utf8');
	//	res.on('data', console.log);
	//	res.on('error', console.error);
	res.on("data", function (data) {
		console.log(data);
	});
	res.on('error', function (error) {
		console.log(error);
	});
});