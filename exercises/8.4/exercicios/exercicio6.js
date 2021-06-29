// 6. Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected.

const assert = require('assert');
const { generateKeyPairSync } = require('crypto');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// function studentAverage() {

//   const avarages = grades.map((grade) => {
//     let sum = grade.reduce((acc, curr) => {
//       return acc + curr;
//     },0);
//     return sum / grade.length;
//   });

//   let newArray = [];

//   for (let i =0; i < students.length; i += 1) {
//     let newObj = {};
//     newObj.name = students[i];
//     newObj.average = avarages[i];
//     newArray.push(newObj);
//   }
//   return newArray;
// }

/******************************************************************
// Gabrito:
function studentAverage() {
  const nameAndAverage = students.map((student, index) => ({
    name: student,
    average: (grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length),
  }));
  return nameAndAverage;
}
******************************************************************/

// Video:


function sumGrades(acc, grade) {
  return acc + grade;
}

function calcAverage(index) {
  const sum = grades[index].reduce(sumGrades, 0);
  return sum / grades[index].length;
}

function studentAverage() {
  return students.reduce((acc, student, index) => {
    const object = {
      name: student,
      average: calcAverage(index)
    };

    acc.push(object);
    return acc;
  }, []);
};


console.log(studentAverage());

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);


/************************************************************
 * 
 * 
 * 
 * 
 ************************/




