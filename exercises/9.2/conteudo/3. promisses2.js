// Vamos ver agora como gerir o fluxo assíncrono com mais 2 "superpoderes" das promises: .then() e .catch() !

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg));

// A promise é executada e, após sua execução, caso o número seja algo entre 5 e 10, o resolve retorna o número que é passado para o primeiro .then() como number . Por sua vez, ele retorna a frase Que sucesso =) nosso número foi ${number} que é passado como argumento para o segundo .then() , que o usa para "logar" no console.

// Ok, mas o erro continua acontecendo... A seguir vamos ver como resolver isso.


