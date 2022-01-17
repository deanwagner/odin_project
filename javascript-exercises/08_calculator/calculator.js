const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(data) {
  let result = 0;
  data.forEach(value => {
    result += value;
  });
  return result;
};

const multiply = function(data) {
  let result = 0;
  data.forEach((value, index) => {
    if (index === 0) {
      result = value;
    } else {
      result *= value;
    }
  });
  return result;
};

const power = function(num1, num2) {
  let result = 0;
  for (let i = 0; i < num2; i++) {
    if (i === 0) {
      result = num1;
    } else {
      result *= num1;
    }
  }
	return result;
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    num = 1;
  } else {
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
  }
  return num;
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
