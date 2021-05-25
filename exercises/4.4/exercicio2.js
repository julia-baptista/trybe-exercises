/**********************************
1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false
*************************************/


function verificaPalindrome(word) {
  let newWord = word.split('').reverse().join('');
  

  if(word === newWord) {
    return true;
  } else {
    return false;
  }
}

// verificaPalindrome('arara');


/**********************************
 Gabarito:

//Duas formas de resolver o exercício
function verificaPalindrome(palavra) {
  let arrayLetras = palavra.split('');
  let isPalindrome = true;
  for (let index in arrayLetras) {
    if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}

function verificaPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome('arara')); //true
console.log(verificaPalindrome('desenvolvimento')); //false

*****************************************************************/



/**********************************
 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

Array de teste: [2, 3, 6, 7, 10, 1];
Valor esperado no retorno da função: 4 

*****************************************************************/

let teste= [2, 3, 6, 7, 10, 1];


function retorneMaiorValor(array) {
  let maiorValor = 0;

  for(let key in array) {
    if(array[key] > maiorValor) {
      maiorValor = array[key]
    }
  }
  return maiorValor;
}

/**********************************
 Gabarito:

function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4 

**************************************/



/**********************************
3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];
Valor esperado no retorno da função: 6
**************************************/
let teste2 = [2, 4, 6, 7, 10, 0, -3];

function indiceDoMenor(numeros) {
  let indiceMenor = 0;

  for(let indice in numeros) {
    if (numeros[indiceMenor] > numeros[indice]) {
      indiceMenor = indice;
    }
  }

  return indiceMenor;
}

/**********************************
Resposta igual gabarito
**************************************/


/**********************************
4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda .
**************************************/

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(array) {
  let maiorNome = '';
  for(let key in array) {
    if(array[key].length > maiorNome.length) {
      maiorNome = array[key];
    }
  }
  return maiorNome;
}

/**********************************
 Gabarito:

 function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (let indice in palavras) {
    if (maiorPalavra.length < palavras[indice].length) {
      maiorPalavra = palavras[indice];
    }
  }
  return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda

****************************************/

/**********************************
5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];
Valor esperado no retorno da função: 2
******************************************/

/**********Gabrito - Duas formas de resolver */


let myNumbers = [2, 3, 2, 5, 8, 2, 3];

function maisRepetido(numeros) {
  let contador = 0;
  let contadorMaior = 0;
  let numeroIndice = 0;

  for(let indice in numeros) {
    let numeroAtual = numeros[indice]
      for(let indice2 in numeros) {
        if( numeroAtual === numeros[indice2]) {
          contador += 1;
        }
      }
      if(contador > contadorMaior) {
        contadorMaior = contador;
        numeroIndice = indice;
      }

     contador = 0;  
  }
  return numeros[numeroIndice];
}


function maisRepetidos2(numeros) {

}


function maisRepetido2(numeros) {
  let num = {};

  for (let index = 0; index < numeros.length; index += 1) {
    let valor = numeros[index];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] = num[valor] + 1;
    }
  }

  let contRepetido = 0;
  let contNumero = 0;

  for (let prop in num) {
    if (contRepetido < num[prop]) {
      contRepetido = num[prop];
      contNumero = prop;
    }
  }

  return contNumero;
}

/**********************************************************
6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5
Valor esperado no retorno da função: 1+2+3+4+5 = 15
***********************************************************/

let n = 5;


function somaNumero(numero) {
  let soma = 0;

  for(let i = 1; i <= numero; i += 1) {
    soma = soma + i;
  }

  return soma;
}

/**********************************************************
7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

Valor de teste: 'trybe' e 'be'

Valor esperado no retorno da função: true

verificaFimPalavra('trybe', 'be') ;

Retorno esperado: true

verificaFimPalavra('joaofernando', 'fernan') ;

Retorno esperado: false

***********************************************************/

function verificaFimPalavra(word, ending) {

  let match = true;
  counter = 1;

  if(ending.length > word.length) {
    match = false;
  }
  else {

    for(let i = 0; i < ending.length; i +=1) {
      
      if(word[word.length - counter] !== ending[ending.length - counter]) {
        match = false;
      }
      else {
        counter +=1;
      }
    }
  }

  return match;
}

/**********************************************************
Gabarito:

//Duas formas de resolver o exercício
function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  controle = true;
  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      controle = false;
    }
  }
  return controle;
}

function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split('').reverse().join('');
  let inversoFimPalavra = fimPalavra.split('').reverse().join('');
  let result;

  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  
  return result;
}

****************************************************************/









