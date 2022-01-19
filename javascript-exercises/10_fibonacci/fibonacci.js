/**
 * Get specific member of the Fibonacci sequence
 * @author  Dean Wagner <info@deanwagner.net>
 * @param   {number} num - Position of Number to Get
 * @returns {number} - Number in Fibonacci Sequence
 */
const fibonacci = function(num) {
    const key = parseInt(num) - 1;
    if (key >= 0) {
        // Seed Fibonacci Sequence
        const fib = [1, 1];

        // Calculate to Position
        for (let i = 2; i <= key; i++) {
            fib[i] = fib[i - 2] + fib[i - 1];
        }

        return fib[key];
    } else {
        // Invalid Input
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
