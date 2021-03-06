// 4. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert');

function secondThirdSmallest(array) {
  let results = []
  let newArray = array.sort();
  array.sort(function(a, b){return a - b});

  for (let i = 1; i <= 2; i += 1) {
    results.push(newArray[i]);
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

const output = secondThirdSmallest(parameter);

assert.strictEqual(typeof secondThirdSmallest, 'function');
assert.deepStrictEqual(output, result);


/*******************************************************
Função Original:

function secondThirdSmallest(array) {
    let results = []
    array.sort(function (x, y) {
        return x + y;
    });
    results = [array[1], array[2]];
    return results;
};

 ******************************************************/

/*******************************************************
Gabarito:

function secondThirdSmallestNew(array) {
    const results = []
    array.sort((item1, item2) => {
        return item1 - item2;
    });
    results.push(array[1], array[2]);
    return results;
};

******************************************************/


