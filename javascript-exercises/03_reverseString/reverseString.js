/**
 * Reverse a String
 * @author  Dean Wagner <info@deanwagner.net>
 * @param   {string} str - String to Reverse
 * @returns {string} - The encrypted/decrypted text
 */
const reverseString = function(str) {
    // Reverse String
    return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
