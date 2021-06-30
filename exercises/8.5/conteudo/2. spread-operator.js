
/***************************************************
 // Spred Operator com Array:
 
const carros = ['Gol', 'HB20', 'Focus'];
const motos = ['Biz', 'R1'];

const veiculos = ['F40', ...carros, ...motos];


console.log(veiculos);
*******************************************************/

// Spread Operator com Objetos:

const conhecimentoTrybe = {
  softSkills: true,
  hardSkilss: true,
  trabalho: true,
}

const pessoa = {
  nome: 'Nadia',
  idade: '28',
  cidade: 'BH',
}

const pessoaTryber = {
  ...pessoa,
  ...conhecimentoTrybe,
  esporte: 'Corrida',
}

console.log(pessoaTryber);

// Outro uso interessante do spread é no argumento de uma função que recebe vários parâmetros.

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76


// E você pode aplicar esse conceito em funções prontas do Javascript que recebem múltiplos parâmetros, como as funções Math.max e Math.min . Vamos ver um exemplo?

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5


