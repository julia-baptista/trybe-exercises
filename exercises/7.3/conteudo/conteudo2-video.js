const assert = require('assert');

const sum = (num1, num2) => num1 + num2;

const expected = sum(5, 4);

// assert.strictEqual(expected, '9', '5 + 4 = 9');
assert.notStrictEqual(expected, 9, '5 + 4 = 9');



/**************************************************************************************************

assert.strictEqual(50, 50); // Sem erros: 50 == 50
assert.strictEqual(50, 70); // AssertionError: 50 == 70

 **************************************************************************************************/
 

/**************************************************************************************************

function division(x, y) {
  return x / y;
}

const expected = division(9, 3);

assert.strictEqual(expected, 3, 'Nove dividido por três é igual a três');

 **************************************************************************************************/


/**************************************************************************************************
// Podemos combinar vários métodos do assert quando escrevemos nossos testes. Isso pode ser muito útil para ampliar a cobertura do teste em casos de falhas! Observe:

function add(a, b) {
  return a + b;
}

const expected = add(1, 2);

1) assert.ok(expected === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro

2) assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)

3) assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==)

 **************************************************************************************************/


/**************************************************************************************************
// É possível também testar estruturas como arrays e objetos:

const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];

assert.deepStrictEqual(list1, list2, 'Erro: list1 e list2 não são estritamente iguais');

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };

assert.deepStrictEqual(person1, person2, 'Erro: person1 e person2 não são estritamente iguais');

const person3 = { name: 'john', age: 19 };

assert.notDeepStrictEqual(person1, person3, 'Erro: os valores dos objetos são estritamente iguais');

 **************************************************************************************************/

/**************************************************************************************************
// Um papel dos testes unitários é nos ajudar a implementar funções mais robustas. Veja, por exemplo, a função que realiza a divisão utilizada no modelo anterior:

function division(x, y) {
  return x / y;
}

assert.strictEqual(division(10, 2), 5); // OK
assert.strictEqual(division(10, 0), 0); // 💣

O primeiro assert.strictEqual funciona e não apresenta erro, mas o segundo deixa evidente uma fragilidade na implementação da função division , pois não poderia ser possível realizar a divisão por 0. Nesse caso, devemos melhorar a implementação da função division , a fim de não termos mais esse estado inconsistente.

 **************************************************************************************************/


/**************************************************************************************************
// Podemos fazer isso usando a palavra chave throw , que no javascript serve para lançar um erro. Usaremos ele, então, para lançar um erro caso o divisor y seja igual a zero:

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK

Atualizamos o teste para refletir a mudança de implementação para essa situação, verificando não só se o erro é lançado, mas também se é o erro esperado. Ou seja, os testes unitários também nos ajudam a identificar casos especiais que podem levar nossas funções a estados inválidos.

O ato de criar erros novos, também chamado de lançar exceções , é algo importantíssimo para casos em que o código em si executa normalmente pelos padrões da linguagem, , mas a pessoa que o escreveu não quer que ele execute nessa hipótese específica.

Nesse caso, com o erro sendo lançado dentro de uma função, a sua execução irá parar naquele exato momento e, caso não exista um bloco de captura do erro que indique o que fazer quando ele ocorre (você irá aprender mais sobre isso ao estudar JS Assíncrono e Promises), o programa como um todo terá a sua execução interrompida.

 **************************************************************************************************/


// Ainda assim, se você tiver interesse em saber mais sobre o assunto, consulte as documentações de throw e Error .

// throw: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/throw

// Error: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error

