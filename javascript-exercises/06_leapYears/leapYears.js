/**
 * Determines whether a given year is a leap year
 * @author  Dean Wagner <info@deanwagner.net>
 * @param   {number} year - The Year to Test
 * @returns {boolean} - Leap Year = true; else = false
 */
const leapYears = function(year) {
    let result = false;
    // Must be Divisible by 4
    if ((year % 4) === 0) {
        // If Divisible by 100
        if ((year % 100) === 0) {
            // Must be Divisible by 400
            if ((year % 400) === 0) {
                result = true;
            }
        } else {
            result = true;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = leapYears;
