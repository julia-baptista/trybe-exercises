// Construtor:
// Para criar a Promise, utilizamos o construtor Promise junto com o operador new . Um construtor nada mais é do que uma função especial que cria um objeto a partir de uma classe.

const promiseEx = new Promise((resolve, reject) => {

});

// Estados da promise:

// A promise tem 3 estados. Pending , Fulfilled e Rejected . Quando a Promise é executada, ela entra automáticamente no estado Pending . Aqui é quando ela sai da fila e vai para sua "área especial". Ao retornar, ela pode apresentar um dos 2 estados: Fulfilled , se ocorreu tudo certo com sua execução ou Rejected , se ocorreu algum erro. É aqui que nossos parâmetros resolve e reject entram.

// Da mesma forma que uma função tem o return para retornar uma resposta de sua execução, a Promise tem o resolve e o reject , que fazem exatamente isso: retornam uma resposta de sua execução. O resolve retorna uma resposta positiva, ou seja, você irá utilizá-lo quando quiser transmitir que tudo ocorreu bem. Já o reject retorna uma resposta negativa, ou seja, você irá utilizá-lo quando ocorrer algo errado.

// Existe apenas uma pequena diferença entre o resolve/reject e o return : enquanto o return interrompe a execução da função quando é chamado, o resolve/reject não o fazem, por isso é importante utilizar um return antes de um deles quando não se quer que a execução continue (esse pattern se chama 'early-return'

// Exercício:
// Para simular uma situação de sucesso e erro, vamos utilizar o Math.random() para sortear um valor de 0 a 10. Se o valor for entre 0 e 5 (com 5 incluso), será um fracasso, caso o valor seja entre 6 e 10, será um sucesso.

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
});

// Uma coisa que você irá reparar é que quando o programa é bem sucedido, seu output aparece normalmente. Já quando ele é mal sucedido, ele lança um error ! Essa é a principal diferença entre o resolve e o reject , exatamente o que queríamos demonstrar. Na próxima sessão vamos ver como tratar este erro.

// Repare também como usamos o return antes do reject para interromper a execução da função. Dessa forma o uso do else se torna desnecessário.



