const fibonacci = function(num) {
    const key = parseInt(num) - 1;
    if (key >= 0) {
        const fib = [1, 1];

        for (let i = 2; i <= key; i++) {
            fib[i] = fib[i - 2] + fib[i - 1];
        }

        return fib[key];
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
