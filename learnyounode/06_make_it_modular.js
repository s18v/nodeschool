var fs = require('fs')
var mod = require('./module')

var ext = process.argv[3];

mod.method(process.argv[2], ext, function (err, list) {
	for (i = 0; i < list.length; i++) {
		if (list[i] === ext)
			continue;
		if (list[i].indexOf(ext) > -1)
			console.log(list[i]);
	}
});

/*
Valid solution with an error - 
Your additional module file [module.js] does not export a single function. You must use the `module.exports = function () {}` pattern.
*/

/*
✗ Submission results did not match expected!
✗ Did not use an additional module file, you must require() a module to help solve this exercise

# FAIL

Your solution to MAKE IT MODULAR didn't pass. Try again!

saran@saran-virtual-machine:~/Documents/nodejs-learning/nodeschool/learnyounode$ learnyounode verify program.js 

Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "CHANGELOG.md"                      ==    "CHANGELOG.md"                     
   "LICENCE.md"                        ==    "LICENCE.md"                       
   "README.md"                         ==    "README.md"                        
   ""                                  ==    ""                                 

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected
✗ Your additional module file [module.js] does not export a single function. You must use the `module.exports = function () {}` pattern.

# FAIL

Your solution to MAKE IT MODULAR didn't pass. Try again!

saran@saran-virtual-machine:~/Documents/nodejs-learning/nodeschool/learnyounode$ learnyounode verify program.js 

Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "CHANGELOG.md"                      ==    "CHANGELOG.md"                     
   "LICENCE.md"                        ==    "LICENCE.md"                       
   "README.md"                         ==    "README.md"                        
   ""                                  ==    ""                                 

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected
✗ Your additional module file [module.js] does not export a single function. You must use the `module.exports = function () {}` pattern.
*/