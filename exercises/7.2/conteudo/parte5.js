// Parte V - Object.assign


// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

// Object.assign(destino, objeto1);
// Object.assign(destino, objeto1, objeto2);
// Object.assign(destino, objeto1, objeto2, objeto3, objeto4);


const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

// obs.: Observe também que a chave age aparece tanto em person como em info e é sobrescrita pelo valor contido em info 


/*******************************************************/
const personb = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(personb, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(personb); // { name: 'Roberto', lastName: 'Silva' }



clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(personb); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

personb.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(personb); // Output: { name: 'Maria', lastName: 'Ferreira' }


// Quando se faz o que foi feito no exemplo mais acima, ao criar uma nova variável para armazenar o retorno do método Object.assign , cria-se apenas um outro "caminho" para modificar ou acessar os dados do objeto destino (nesse caso, person ).

/**************************************************************/

// No exemplo abaixo, é apresentada outra forma de se copiar um objeto.

const obj = { value1: 10, value2: 11 };
const cloneObj = obj;

// Se você modificar o cloneObj , verá que novamente teremos o mesmo resultado anterior, de forma que o obj também é alterado. Ok, tendo isso em vista, como faremos para mudar os dados do novo objeto criado sem modificar o objeto inicial?

/**************************************************************/

// Mas então como faremos para mudar os dados do novo objeto criado sem modificar o objeto inicial?

// Para resolver esse problema, podemos passar como primeiro parâmetro do Object.assign um objeto vazio {} e armazenar seu retorno em uma nova variável.


const personc = {
  name:'Roberto',
};

const lastNamec = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},personc,lastNamec);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(personc);







