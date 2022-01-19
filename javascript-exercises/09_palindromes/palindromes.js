/**
 * Determines whether or not a given string is a palindrome
 * @author  Dean Wagner <info@deanwagner.net>
 * @param   {string} str - String to Test
 * @returns {boolean} - Palindrome = true; else = false
 */
const palindromes = function (str) {
    // Strip Special Characters
    let forward = str.replaceAll(" ", "").replaceAll("!", "").replaceAll(".", "").replaceAll(",", "").toLowerCase();
    
    // Reverse String
    let backward = forward.split("").reverse().join("");
    
    if (forward === backward) {
        // Is a Palindrome
        return true;
    } else {
        // Not a Palindrome
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
