/*************************************************************************
Instalando o Jest

1. Para começar a instalar o Jest, você precisa ter o npm instalado e funcionando corretamente, abaixo temos um passo a passo, feito para Linux , sabendo disso, então vá ao seu terminal e digite:

npm -v

2. Se ele te mostrar um número de versão (por exemplo, 6.14.4) está tudo certo, você pode pular os comandos deste passo. Caso ele retorne um erro dizendo que não encontrou o comando você deverá executar a instalação do npm , descrita abaixo:

a. Primeiro vamos atualizar a nossa lista de repositórios:

sudo apt update

b. Agora com a lista de repositórios atualizada, vamos instalar o npm . Lembre-se que ao instalar com apt , você pode utilizar o comando de qualquer local, e em todas as próximas vezes você não deverá reinstalar, só execute esse passo caso não tenha o npm instalado ainda.

sudo apt install npm

3. Com o npm verificado, crie uma pasta e entre nesta nova pasta que você criou.

Obs: É importante criar esta nova pasta para cada um dos seus projetos, pois além de ficar mais organizado, você vai evitar que as configurações de um projeto interfiram com outro, visto que o processo de instalação irá criar arquivos e pastas.

a. Após entrar na pasta, digite no terminal o comando abaixo:

npm init -y

Você terá o seguinte retorno:

Wrote to /home/cleyton/Documents/meuApp/package.json:

{
  "name": "meuApp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

b. Este comando acabou de criar o arquivo package.json . Agora você precisa editar este arquivo, substituindo "test": "echo \"Error: no test specified\" && exit 1" por "test": "jest" , da seguinte forma:

{
  "name": "meuApp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
 }



Explicando o que é o package.json: é onde listamos as dependências e versões (entre outras informações da aplicação).

4. Por fim, vamos instalar o Jest , dentro da pasta que você criou no passo 3, executando o seguinte comando no terminal:

npm install --save-dev jest


Esse comando irá instalar tudo o que é necessário para o Jest , criando a pasta node_modules e o arquivo package-lock.json .

Explicando o que são esses dois:

* node_modules é a pasta que guarda todos os arquivos baixados das dependências instaladas.

* package-lock.json é um arquivo que “trava” as versões das dependências. Quando outra pessoa executar npm install ou npm i para baixar as dependências, este arquivo garante que serão instaladas as mesmas versões para todo mundo.





Para testar sua instalação, vamos criar um arquivo chamado sum.test.js e colar o código abaixo dentro dele:


const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

Depois disso, vamos até o terminal digitar npm test
*************************************************************************/


/*********************************************************************
 Resumo:

 1. Após entrar na pasta, digite no terminal o comando abaixo:

// npm init -y

Este comando acabou de criar o arquivo package.json
Substitua "test": "echo \"Error: no test specified\" && exit 1" por "test": "jest" 

2. Por fim, vamos instalar o Jest , dentro da pasta que você criou:

// npm install --save-dev jest

Esse comando irá criar a pasta node_modules e o arquivo package-lock.json .

* node_modules é a pasta que guarda todos os arquivos baixados das dependências instaladas.

* package-lock.json é um arquivo que “trava” as versões das dependências. Quando outra pessoa executar npm install ou npm i para baixar as dependências, este arquivo garante que serão instaladas as mesmas versões para todo mundo.

**********************************************************************/ 