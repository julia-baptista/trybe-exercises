/*******************************************************************
Expect e matchers   --> Matcher toBe e toEqual

Ao escrever testes, você precisa verificar que valores satisfazem a algumas condições. A função expect é utilizada para dar acesso a um conjunto de métodos chamados matchers . Esses métodos permitem testar valores de diversas formas. expect recebe o valor a ser testado e retorna um objeto representando uma expectation . Sobre esse objeto pode-se chamar os matchers que Jest fornece.

Vamos passar pelos matchers mais comuns. É interessante saber que existem muitos outros matchers que podem ser encontrados na documentação oficial do Jest.

Documentação Ofiial do Jest:
https://jestjs.io/docs/expect


*******************************************************************/


/*******************************************************************
// toBe

toBe , que utilizamos no exemplo anterior, é o matcher mais simples. Esse matcher testa igualdade estrita entre o valor passado para expect e seu argumento. Isso significa, por exemplo, que um teste com o expectation abaixo falharia porque a string "5" não é igual ao número 5.

expect(5).toBe("5")

*******************************************************************/


/*******************************************************************
// toEqual

Para compreendermos a diferença entre toEqual e toBe , precisamos entender que no JavaScript existem duas formas de atribuir valores. A primeira é para a variável e a segunda é para propriedade do objeto, bem como ao passar argumentos para uma função. Essas formas de atribuição são conhecidas por VALOR e REFERÊNCIA .

Para nos aprofundarmos nessas duas formas, é importante entender os tipos de dados, que separamos em tipos primitivos (Ex. number, string, boolean, etc) e objetos (Ex. Objetos, Funções, Arrays, etc).

Valor: 

Os tipos primitivos a atribuição ocorre por valor , ou seja, uma cópia do valor original, pois eles são imutáveis. Eles são como gêmeos, uma vez o primeiro gêmeo corta seu cabelo, o segundo não terá seu cabelo alterado. Por exemplo:

*******************************************************************/

/*******************************************************************

let name = "Pedro";
let firstName = name;

name = "Carol";

console.log(name); // Carol
console.log(firstName); // Pedro

*******************************************************************/

/*******************************************************************

Referência:

Por outro lado, os objetos tem atribuição por referência , ou seja, a cada vez que você cria um novo objeto, cria-se um novo espaço na memória para ele. Eles são mutáveis, por tanto podemos considerar que é uma forma de criar um apelido ( alias ) para o original, ou seja, você pode ser chamado pelo seu nome ou por seu apelido, mas você é uma pessoa única, não é possível criar um clone seu. Veja este exemplo:

*******************************************************************/

/*******************************************************************

let myName = { firstName: "Pedro" };
let identity = myName;

myName.firstName = "Carol";

console.log(myName.firstName); // Carol
console.log(identity.firstName); // Carol

*******************************************************************/

/*******************************************************************

Isso significa que objetos e arrays com conteúdo iguais são considerados diferentes no JavaScript . Para testar igualdade de objetos e arrays, é preciso usar o matcher toEqual , que acessa cada elemento do objeto ou array, fazendo um trabalho de comparação específico e que retorna uma resposta mais voltada para a necessidade dos testes:

*******************************************************************/

/*******************************************************************

test('array and object equality', () => {
  const arr = [1, 2 ,3];
  const obj = { a: 1, b: 2, c: 3};

  expect(arr).toBe([1, 2, 3]); // fails
  expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
  expect(arr).toEqual([1, 2, 3]); // OK
  expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
});

*******************************************************************/



