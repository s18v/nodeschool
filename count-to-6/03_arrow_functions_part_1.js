/* 
Reference - 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/
var input = process.argv.slice(2);
// inputs = [ 'Teenage', 'Mutant', 'Ninja', 'Turtles' ];

var mapOutput = input.map(arr => arr[0]);
// mapOutput = ['T', 'M', 'N', 'T'];

var reduceOutput = mapOutput.reduce((arr, x) => arr + x);
// reduceOutput = TMNT

console.log(`[${input}] becomes "${reduceOutput}"`);

// OFFICIAL SOLUTION
/*
var inputs = process.argv.slice(2);
var result = inputs.map(s => s[0])
    .reduce((soFar, s) => soFar + s);

console.log(`[${inputs}] becomes "${result}"`);
*/