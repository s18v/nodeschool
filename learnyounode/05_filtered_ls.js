var fs = require('fs')
var path = require('path')

var dirName = process.argv[2];
var ext = process.argv[3];

fs.readdir(dirName, function (err, list) {
	for (i = 0; i < list.length; i++) {
		if (list[i] === ext) 
			continue;
		if (list[i].indexOf(ext) > -1) 
			console.log(list[i]);	
	}	
});

/* Official Solution */
/*var fs = require('fs')
    var path = require('path')
    
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    }) */