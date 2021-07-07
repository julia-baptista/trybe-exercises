const assert = require('assert');

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

assert.deepStrictEqual(numbers, [1, 2, 3]); // essa validação falha


/*********************************************************
Por que a validação referente ao primeiro código funciona, e a referente ao segundo não? O teste espera receber o array [1, 2, 3] , mas apenas recebe o [2, 3] . Isso ocorre por causa da função setTimeout . Ela é uma função assíncrona, que espera alguns milissegundos para executar a função passada a ela como parâmetro. No código acima, ela espera 3000 milissegundos (3 segundos) para executar o pushNumber(numbers, 1) .
*********************************************************/