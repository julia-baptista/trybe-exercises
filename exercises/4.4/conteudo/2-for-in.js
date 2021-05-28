// pedidos de pixxa

let pizzas = {
  sabor: 'Palmito',
  preco: 39.90,
  bordaCatupiry: true
};



for(let key in pizzas) {
  console.log(key);
}

console.log('----------------------------------')

for(let key in pizzas) {
  console.log(pizzas);
}

console.log('----------------------------------')

for(let key in pizzas) {
  console.log(pizzas.preco);
}

console.log('----------------------------------')

for(let key in pizzas) {
  console.log(pizzas['bordaCatupiry']);
}

console.log('----------------------------------')
console.log('-------------pizzas[key]---------------------')

for(let key in pizzas) {
  console.log(pizzas[key]);
}

// Arrays
console.log('----------------------------------')
console.log('Arrays:');

let pizzasDoces = ['chocolate', 'banada', 'morango'];

for (let key in pizzasDoces) {
  console.log(key);
}

console.log('----------------------------------')

for (let key in pizzasDoces) {
  console.log(pizzasDoces);
}

console.log('----------------------------------')

for(let key in pizzasDoces) {
  console.log(pizzasDoces[key]);
}

console.log('----------------------------------')

for(let key in pizzasDoces) {
  console.log(key, pizzasDoces[key]);
}



// Atenção para a diferença entre o for in e o for of:
//  o For/in percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades. 
//  Já o For/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o For/in .

console.log('----------------------------------')

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

