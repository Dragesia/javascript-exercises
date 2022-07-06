const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
  return parseInt(args.reduce((result, num) => {
    result += num;
    return result;
  }, 0));

};

const multiply = function(args) {
  return parseInt(args.reduce((result, num) => {
    result *= num;
    return result;
  }, 1));
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  if (a == 0) return 1;
	let result = 1;
  for(let i=a; i>0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
