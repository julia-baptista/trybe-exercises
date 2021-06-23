const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(typeof(sum), 'function');
assert.strictEqual(sum(4,5), 9);
assert.strictEqual(sum(0,0), 0);


// Teste se o retorno de sum(4, 5) é 9
// const expected = sum(4, 5);
// assert.strictEqual(expected, 9, '4 + 5 = 9');
// assert.strictEqual(sum(4,5), 9);

// 2. Teste se o retorno de sum(0, 0) é 0
// const expected = sum(0, 0);
// assert.strictEqual(expected, 0, '0 + 0 = 0');

// 3. Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// const expected = sum(4, '5');
// assert.strictEqual(expected);

// assert.throws(() => {
//   sum(4, '5');
// });

assert.throws(() => {
  sum(4, '5');
});

// assert.doesNotThrow(() => {
//   sum(4, '5');
// });


// assert.throws(() => {
//   sum(4, '5');
// }, /^Error: parameters must be numbers$/);

// assert.throws(() => { sum(4, "5"); }, /^Error: parameters y must not be 0$/);




