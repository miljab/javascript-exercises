const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, item) => total + item, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, item) => total * item)
};

const power = function(a, b) {
  let result = a;
	for(let i = 0; i < b - 1; i++) {
    result *= a;
  }
  return b !== 0 ? result : 1;
};

const factorial = function(a) {
	if(a === 1 || a === 0) return 1;

  return a * factorial(a - 1);
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
