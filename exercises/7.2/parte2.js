const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


// 1. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.


function adicionaParametro(objeto, chave, valor) {
  let newKey = `${chave}`;
  chave = `${valor}`;
  objeto[`${newKey}`] = chave;
}

adicionaParametro(lesson2, 'turno', 'manhã');


/*******************************************************************************
// Gabarito Exercício 1: 

const addNewKey = (obj, key, value) => {
  obj[key] = value;
};

addNewKey(lesson2, 'turno', 'manhã');

console.log(lesson2);

*******************************************************************************/


// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function listKeyValues(obj) {
  const keyValues = Object.keys(obj);
  console.log('Esta é a lista:');
  console.log(keyValues);
}

listKeyValues(lesson1);

/*******************************************************************************
// Gabarito Exercício 2: 

const listKeys = (obj) =>  Object.keys(obj);
console.log(listKeys(lesson1));

*******************************************************************************/

// 3. Crie uma função para mostrar o tamanho de um objeto.

const sizeObj = (obj) =>  Object.keys(obj).length;
console.log('---- Object size of lesson 1: --------');
console.log(sizeObj(lesson1));


// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro

const objectValues = (obj) => Object.values(obj);
console.log('-----Object Values: -------');
console.log(objectValues(lesson1));


// 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log('-------All Lessons: ------------');
console.log(allLessons);

console.log('------- Trype Of ---------');
console.log(typeof(allLessons));


// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

function returnNumStudents(obj) {
  let totalStudents = 0;
  let objectLength = Object.keys(obj).length;
  let objectKeys = Object.keys(obj);
  
  for (let i = 0; i < objectLength; i +=1) {
    
    let numOfStudents = obj[`${objectKeys[i]}`].numeroEstudantes;
    totalStudents += numOfStudents;
    
  }
  console.log(totalStudents);
}

returnNumStudents(allLessons);


/*******************************************************************************
// Gabarito Exercício 6: 

const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));

*******************************************************************************/

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

function getValueByNumber(obj, position) {
  const valueArray = Object.values(obj);
  const value = valueArray[position];
  console.log(value);
}
getValueByNumber(lesson1, 0);

/*******************************************************************************
// Gabarito Exercício 7: 

const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 0));

*******************************************************************************/

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false


// Tentei desse jeito e deu errado:
// const verifyPair = (obj, key, value) => Object.entries(obj).includes(`[ '${key}', '${value}']`);
// console.log(verifyPair(lesson1, 'materia', 'Matemática'));


// Gabarito Exercício 8: 

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));

/*******************************************************************************/

// Bônus

// 1. Crie uma função para contar quantos estudantes assistiram às aulas de matemática. Use o objeto criado no exercício 5.


// const allLessons

{
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'manhã'
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
}



const getNumberOfMathStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {

    
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));






