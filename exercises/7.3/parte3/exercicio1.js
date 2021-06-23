/**********************************************************
Reescrevendo funções utilizando TDD - Parte 3
Agora mudamos um pouco: temos uma função pronta (e feita de forma errada, ou seja, sem funcionar direito), os parâmetros que devem ser passados a ela e a resposta esperada. Escreva testes de modo a entender e testar o comportamento da função e, depois, altere-a para que passe nos testes.
***********************************************************/

// 1. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert');

const greetPeople = (people) => {
  const greeting = 'Hello';
  let newArray = [];

  for (const person in people) {
    let item = `${greeting} ${people[person]}`;
    newArray.push(item);
  }
  return newArray;
};

assert.strictEqual(typeof greetPeople, 'function');

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const output = greetPeople(parameter);

assert.deepStrictEqual(output, result);


/**********************************************************
Função original:

const greetPeople = (people) => {
  let greeting = 'Hello ';

  for (const person in people) {
    greeting += people[person];
  }
  return greeting;
};

***********************************************************/


/**********************************************************
Gabarito:

const greetPeopleNew = (people) => {
  const greeting = [];
  for (const person in people) {
    greeting.push(`Hello ${people[person]}`);
  }
  return greeting;
};

***********************************************************/







