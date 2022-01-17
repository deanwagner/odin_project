const repeatString = function(str, num) {
    let fin = "";
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            fin += str;
        }
    } else {
        fin = "ERROR";
    }
    return fin;
};

// Do not edit below this line
module.exports = repeatString;
