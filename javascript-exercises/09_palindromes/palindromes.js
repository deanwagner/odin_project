const palindromes = function (str) {
    let forward = str.replaceAll(" ", "").replaceAll("!", "").replaceAll(".", "").replaceAll(",", "").toLowerCase();
    let backward = forward.split("").reverse().join("");
    if (forward === backward) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
