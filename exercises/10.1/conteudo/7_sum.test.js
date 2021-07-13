// 7_um.test.js
const sum = require('./6_sum');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});