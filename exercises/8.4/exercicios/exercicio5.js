const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];


// 5. Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.


// function containsA() {
//   const words = names.reduce((acc, curr) => acc.concat(curr),[]);
//   const letters = words.toString();
//   const lettersArray = letters.split('');
//   return lettersArray.reduce((acc, curr) => {
//     if (curr === 'a' || curr === 'A') {
//       acc += curr;
//     }
//     return acc;
//   }, '').length;
// }

function containsA() {
  const words = names.reduce((acc, curr) => acc.concat(curr),[]);
  const letters = words.toString();
  const lettersArray = letters.split('');
  return lettersArray.reduce((acc, curr) => {    
    if (curr === 'a' || curr === 'A') {
      return acc + 1;
    }
    else {
      return acc;
    }
  }, 0);
}

console.log(containsA());

// assert.deepStrictEqual(containsA(), 20);

/****************************
Gabrito:

function containsA() {
  return names.reduce((acc, curr) =>
     acc + curr.split('').reduce((acumulator, current) => {
        if (current === 'a' || current === 'A') return acumulator + 1;
        return acumulator;
     }, 0), 0);
}

******************************/
