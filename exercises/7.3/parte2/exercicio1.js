/*****************************************************************************
 Dados os casos de testes abaixo, escreva as funções de forma a passar nos testes. É importante nunca alterar os testes ou as variáveis já escritas no código :

 Copie os testes já implementados e desenvolva as funções. Separe as funções em arquivos para evitar qualquer tipo de problema.

 *******************************************************************************/

 // 1. Escreva a função addOne para passar nos testes já implementados.
 
 
 
const assert = require('assert');

 // escreva a função addOne aqui

const addOne = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    const item = array[i] + 1;
    newArray.push(item);
  }
  return newArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);
 
assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

