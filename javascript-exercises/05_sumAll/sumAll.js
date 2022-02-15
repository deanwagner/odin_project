/**
 * Calculates sum of every number between (and including) supplied numbers
 * @author  Dean Wagner <info@deanwagner.net>
 * @param   {number} num1 - First Number
 * @param   {number} num2 - Second Number
 * @returns {number} - The Sum
 */
const sumAll = function(num1, num2) {
    let result = "ERROR";

    // Validate Numbers
    if ((checkNum(num1)) && (checkNum(num2))) {
        if (num1 === num2) {
            // Equal Numbers
            result = num1 + num2;
        } else if (num1 < num2) {
            // Second is Greater
            result = calc(num1, num2);
        } else {
            // First is Greater
            result = calc(num2, num1);
        }
    }
    return result;
};

/**
 * Helper Function for sumAll(); Checks for Valid Number
 * @param   {number} num - Number to Test
 * @returns {boolean} - Valid = true; Invalid = false
 */
const checkNum = function(num) {
    switch (true) {
        // Not a Number
        case (!Number.isInteger(num)):
            return false;
        // Less than Zero
        case (num < 0):
            return false;
        // Valid
        default:
            return true;
    }
};

/**
 * Helper Function for sumAll(); Calculates Sum
 * @param   {number} first - First Number
 * @param   {number} last  - Last Number
 * @returns {number} - The Sum
 */
const calc = function(first, last) {
    let sum = 0;
    // Loop to Calculate Sum
    for (let i = first; i <= last; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
