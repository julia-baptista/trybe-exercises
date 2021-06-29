const assert = require('assert');

const epic = ['A', 'long', 'time', 'ago,', 'in a', 'galaxy', 'far far', 'away...'];


const epicPhrase = epic.reduce((accumulator, currentValue) => {
  // console.log(`accumulator: ${accumulator} -- currentValue: ${currentValeu}`);
  return `${accumulator} ${currentValue}`;
});

console.log(epicPhrase);


const expectedValue = 'A long time ago, in a galaxy far far away...';
assert.strictEqual(epicPhrase, expectedValue);


// const epicPhrase2 = epic.reduce((accumulator, currentValue) => {
//   console.log(`accumulator: ${accumulator} -- currentValue: ${currentValeu}`);
//   return `${accumulator} ${currentValue}`;
// }, 'Star Wars');



