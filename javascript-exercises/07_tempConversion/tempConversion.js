/**
 * Converts Fahrenheit to Celsius
 * @param   {number} temp - Temperature to Convert
 * @returns {number} - Converted Temperature
 */
const ftoc = function(temp) {
    return round((temp - 32) * 5 / 9);
};

/**
 * Converts Celsius to Fahrenheit
 * @param   {number} temp - Temperature to Convert
 * @returns {number} - Converted Temperature
 */
const ctof = function(temp) {
    return round(temp * 9 / 5 + 32);
};

/**
 * Helper Function for ftoc() & ctof(); Rounds Number to 1 Decimal
 * @param   {number} num - Number to Round
 * @returns {number} - Rounded Number
 */
const round = function(num) {
    return +(Math.round(num + "e+1")  + "e-1");
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof
};
