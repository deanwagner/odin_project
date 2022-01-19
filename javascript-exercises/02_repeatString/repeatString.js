/**
 * Repeats a string for specified amount of times.
 * @author  Dean Wagner <info@deanwagner.net>
 * @param   {string} str - String to Repeat
 * @param   {number} num - Number of Times to Repeat
 * @returns {string} - Repeated String
 */
const repeatString = function(str, num) {
    let fin = "";
    if (num >= 0) {
        // Loop to Repeat String
        for (let i = 0; i < num; i++) {
            fin += str;
        }
    } else {
        // Invalid Input
        fin = "ERROR";
    }
    return fin;
};

// Do not edit below this line
module.exports = repeatString;
