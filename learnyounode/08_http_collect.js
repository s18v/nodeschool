var http = require('http')
var url = process.argv[2];

http.get(url, function (res) {
	res.setEncoding('utf8');
	var result = "";
	
	// data, end and error are the three events
	res.on("data", function (data) {
		result += data;
	});

	res.on("end", function () {
		console.log(result.length);
		console.log(result);
	});

	res.on("error", console.error);
});

//OFFICIAL SOLUTION
/*
    var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))  
    })
	
*/