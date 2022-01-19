/**
 * Adds 2 Numbers
 * @author  Dean Wagner <info@deanwagner.net>
 * @param   {number} num1 - Augend 
 * @param   {number} num2 - Addend
 * @returns {number} - Sum
 */
const add = function(num1, num2) {
  return num1 + num2;
};

/**
 * Subtracts 2 Numbers
 * @author  Dean Wagner <info@deanwagner.net>
 * @param   {number} num1 - Minuend
 * @param   {number} num2 - Subtrahend
 * @returns {number} - Difference
 */
const subtract = function(num1, num2) {
	return num1 - num2;
};

/**
 * Adds each Element of an Array
 * @author  Dean Wagner <info@deanwagner.net>
 * @param   {number} data[] - Numbers to Add
 * @returns {number} - Sum
 */
const sum = function(data) {
  let result = 0;
  data.forEach(value => {
    result += value;
  });
  return result;
};

/**
 * Multiplies each Element of an Array
 * @author  Dean Wagner <info@deanwagner.net>
 * @param   {number} data[] - Numbers to Multiply
 * @returns {number} - Product
 */
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

/**
 * Exponentiation (to the power of)
 * @author  Dean Wagner <info@deanwagner.net>
 * @param   {number} num1 - Base 
 * @param   {number} num2 - Exponent
 * @returns {number} - Result
 */
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

/**
 * Calculate Factorial
 * @author  Dean Wagner <info@deanwagner.net>
 * @param   {number} num - Get Factorial of
 * @returns {number} - Factorial
 */
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
