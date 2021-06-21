// Parte II - Object.keys

// Agora, você aprenderá sobre o método Object.keys . Ele é utilizado para listar as chaves de um objeto, retornando-as em um array.

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(index in arrayOfSkills){
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);

