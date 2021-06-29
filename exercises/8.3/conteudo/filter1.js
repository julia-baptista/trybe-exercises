/***************************************
filter()

retorna um array
valida a condição através de sua callback

***************************************/

const cities = [
  {satate: 'AM', name: 'Nepomuceno', region: 'N'},
  {satate: 'PA', name: 'Nepomuceno', region: 'N'},
  {satate: 'TO', name: 'Nepomuceno', region: 'N'},
  {satate: 'MG', name: 'Nepomuceno', region: 'SE'},
  {satate: 'BA', name: 'Nepomuceno', region: 'NE'},
  {satate: 'PR', name: 'Nepomuceno', region: 'S'},
  {satate: 'SP', name: 'João Pinheiro', region: 'SE'},
  {satate: 'RN', name: 'João Pinheiro', region: 'NE'},
  {satate: 'CE', name: 'João Pinheiro', region: 'NE'},
  {satate: 'TO', name: 'João Pinheiro', region: 'N'},
  {satate: 'MG', name: 'João Pinheiro', region: 'SE'},
]


// 1. Econtre toas as cidades da região Nordeste (NE)

// let citiesNE = [];

// for (let index = 0; index < cities.length; index +=1) {
//   if (cities[index].region === 'NE') {
//     citiesNE.push(cities[index]);
//   }
// }

// console.log(citiesNE);


const citiesNE = cities.filter((city) => {
  return city.region === 'NE'; // criterio
});

console.log(citiesNE);

// 1. Econtre toas as cidades do estado de Tocantins

const stateTO = cities.filter((city) => {
  return city.region === 'TO'; // criterio
});

console.log(citiesNE);


