const randomNumber = () => {
  return Math.flor(Math.random()*101);
};

// 4. Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. 

const toUppercase = (string) => string.toUppercase();

const firstLetter = (string) => string.slice(0, 1);
// Gabarito: const secondFunction = (str) =>  str.charAt(0);

const concatStrings = (fisrtString, secondString) => fisrtString.concat(secondString);


module.exports = { randomNumber, toUppercase, firstLetter, concatStrings };

