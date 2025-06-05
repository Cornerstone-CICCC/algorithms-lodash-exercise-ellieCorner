// Instructions: Use lodash's chain function to filter the even numbers from the array and then get their sum.

const _ = require("lodash");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// your code here
const sumOfEvens = _.filter(numbers, (number) => number % 2 === 0).reduce(
  (a, b) => a + b
);

console.log(sumOfEvens); // Expected output: 20
