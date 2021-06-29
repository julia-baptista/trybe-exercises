const assert = require('assert');

const numbers = [2, 3, 4, 6, 8, 12, 24];


// let sumWithFor = numbers[0]; // 2
// for (let index = 1; index < numbers.length; index += 1) {
//   sumWithFor = sumWithFor + numbers[index];
// }


// console.log(sumWithFor);

const sumWithReduce = numbers.reduce((accumulator, currentValeu)=> {
  console.log(`accumulator: ${accumulator} -- currentValue: ${currentValeu}`);
  return accumulator + currentValeu;
});

const sumWithReduce2 = numbers.reduce((accumulator, currentValeu)=> {
  console.log(`accumulator: ${accumulator} -- currentValue: ${currentValeu}`);
  return accumulator + currentValeu;
}, 0);

console.log(sumWithReduce)

const expectedValue = 59;
// assert.strictEqual(sumWithFor, expectedValue);
assert.strictEqual(sumWithReduce, expectedValue);


