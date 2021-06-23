
// teste de mesa de testes unitarios

const assert = require('assert');

const summationOf = (number) => {

  if(typeof(number) !== 'number') {
    throw new Error('Utilize apenas números');

  }

  let summation = null;

  for (let index = 1; index <= number; index += 1) {
    summation += index;
  }

  return summation;

};

// Cenário 1 - Verificar se a função existe
assert.strictEqual(typeof(summationOf), 'function', 'O resultado esperado é uma');

// Cenário 2 - Verificar se a função retorna os valores esperados
assert.strictEqual(summationOf(1), 1);
assert.strictEqual(summationOf(3), 6);
assert.strictEqual(summationOf(5), 15);


// Cenário 3 - Verificar se a função trata erros
assert.throws(() => {
  summationOf('0');
});




