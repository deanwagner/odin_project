const sumAll = function(num1, num2) {
    let result = "ERROR";
    if ((checkNum(num1)) && (checkNum(num2))) {
        if (num1 === num2) {
            result = num1 + num2;
        } else if (num1 < num2) {
            result = calc(num1, num2);
        } else {
            result = calc(num2, num1);
        }
    }
    return result;
};

const checkNum = function(num) {
    switch (true) {
        case (!Number.isInteger(num)):
            return false;
        case (num < 0):
            return false;
        default:
            return true;
    }
};

const calc = function(first, last) {
    let sum = 0;
    for (let i = first; i <= last; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
