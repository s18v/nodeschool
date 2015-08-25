/* 
	Some sample outputs of the following function - 

	midpoint(-1) returned 0
	midpoint(1, 10) returned 5.5
	midpoint(-1, undefined) returned 0
	midpoint(undefined, 10) returned 5
	midpoint(undefined, undefined) returned 0.5
	
	Note that other values will not trigger the defaulting, even falsy values like null, false, "", or 0
*/
module.exports = function midpoint(lower = 0, upper = 1) {
	return (lower + upper)/2;
};

// OFFICIAL SOLUTION 

/*
	module.exports = (x = 0, y = 1) => (x + y) / 2;
*/