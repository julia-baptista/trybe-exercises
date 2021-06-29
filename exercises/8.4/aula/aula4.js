const assert = require('assert');

const numbers = [2, 3, 4, 6, 8, 12, 24];

// const sumEvenNumbers = numbers.reduce((accumulator, currentValeu) => {
//   if (currentValeu % 2 !== 0) { // ímpar
//     return accumulator + 0;
//   }
//   return accumulator + currentValeu;
// })

// console.log(sumEvenNumbers);

// const sumEvenNumbers2 = numbers.reduce((accumulator, currentValeu) => {
//   if (currentValeu % 2 !== 0) {
//     return accumulator + 0;
//   }
//   return accumulator + currentValeu;
// }, 0)

// --------------------------------------------
// const evenNumbers = numbers.filter((number) => {
//   return number % 2 == 0;
// });

// const sumEvenNumbers = evenNumbers.reduce((accumulator,currentValue) => {
//   return accumulator + currentValue;
// })
// --------------------------------------------

// encadeamento
const evenNumbers = numbers
  .filter((number) => number % 2 == 0)
  .reduce((accumulator,currentValue) => accumulator + currentValue);

console.log(sumEvenNumbers);

const expectedValue = 56;
assert.strictEqual(sumEvenNumbers, expectedValue);
