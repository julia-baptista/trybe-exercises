/***********************************************************
 
Antes de irmos para o código, como vamos rodar nosso código direto no Node e não no browser, precisamos instalar o node-fetch . Execute o comando abaixo caso você ainda não tenha o package.json :

npm init -y

depois, instale o node-fetch :

npm i node-fetch

****************************************************************/

const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev');

/*************************************************************
1. Primeiro criamos a função verifiedFetch e passamos o url do nosso endpoint.
2. Depois retornamos uma promise , transformando nossa função em uma função assíncrona
3. Agora, dentro da promise fazemos uma verificação. Se o endpoint for o certo, usamos o fetch para fazer uma chamada ao endpoint, transformamos a resposta em um json utilizando o método .json()
4. e para finalizar usamos o resolve para retornar a nossa resposta.
5. Caso o url não seja o certo, levantamos um error. Perceba aqui que usamos o construtor new Error para levantar um error. Usar esse construtor dentro do reject é uma boa prática importante e vamos usá-lo a partir de agora.

 *************************************************************/


/*****************************************************************
Para logar o resultado: 

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(console.log(r.value)));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}
 *****************************************************************/