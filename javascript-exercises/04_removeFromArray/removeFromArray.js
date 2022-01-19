/**
 * Removes specified Elements from Array
 * @author  Dean Wagner <info@deanwagner.net>
 * @param   {number} data[]   - Array of Numbers
 * @param   {number} remove[] - Numbers to be Removed
 * @returns {number} - Array with Removed Elements
 */
const removeFromArray = function(data, ...remove) {
    // Loop through Parameters
    for (let i = 0; i < remove.length; i++) {
        // Remove Element
        const index = data.indexOf(remove[i]);
        if (index >= 0) {
            data.splice(index, 1);
        }
    }
    return data;
};

// Do not edit below this line
module.exports = removeFromArray;
