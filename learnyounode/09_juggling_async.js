var http = require('http')
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var result1 = "";
var result2 = "";
var result3 = "";

// Basic Implementation
// Current callback completes when next response is concatenated with data 
http.get(url1, function (res1) {
	res1.setEncoding('utf8');
	res1.on('data', function (data1) {
		result1 += data1;
	});

	res1.on("end", function () {
		http.get(url2, function (res2) {
			res2.setEncoding('utf8');
			res2.on('data', function (data2) {
				result2 += data2;
			})

			res2.on('end', function () {
				http.get(url3, function (res3) {
					res3.setEncoding('utf8');
					res3.on('data', function (data3) {
						result3 += data3;
					});

					res3.on('end', function () {
						console.log(result1);
						console.log(result2);
						console.log(result3);
					});
				});
			});
		});
	});
});

// OFFICIAL SOLUTION
/*
    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)
    
          results[index] = data.toString()
          count++
    
          if (count == 3)
            printResults()
        }))
      })
    }
    
    for (var i = 0; i < 3; i++)
      httpGet(i)
*/