/****************************************************************
Parâmetro Rest

O parâmetro rest é uma feature do ES6 que permite com que você crie funções que recebam um número variável de argumentos.

Os argumentos que serão passados como parâmetro são salvos em um array que pode ser acessado de dentro da função.

****************************************************************/

function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.


// Exemplo 2:

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

