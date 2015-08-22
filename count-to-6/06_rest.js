module.exports = function average(...arr) {
	var count = arr.length;
	var sum = 0;
	/* 
	forEach uses a callback function as one of its params
	Syntax - arr.forEach(callback[, thisArg]); 
	*/
	arr.forEach(function (num) {
		sum += num;
	});
	return sum / count;
};