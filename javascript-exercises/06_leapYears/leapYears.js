const leapYears = function(year) {
    let result = false;
    if ((year % 4) === 0) {
        if ((year % 100) === 0) {
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
