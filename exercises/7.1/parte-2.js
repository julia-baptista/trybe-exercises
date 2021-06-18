// 1. Crie uma função que receba um número e retorne seu fatorial.
// Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

// const fatorial = (numero) => {
//   let contador = numero;  
//   for (let i = numero - 1; i >= 1; i -= 1) {
//     contador = contador * i;
//   }
//   console.log(contador);
// }

// fatorial(4);

/**********************************************************************************************
Gabarito Factorial:

const factorial = number => {
    let result = 1

    for (let index = 2; index <= number; index += 1) {
        result *= i
    }

    return result
}

console.log(factorial(5))

 ********************************************************************************************/

/**********************************************************************************************
Gabarito Recursiva:

const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(5))

 ********************************************************************************************/

const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(5))

