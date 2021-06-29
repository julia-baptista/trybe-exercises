const assert = require('assert');


const players = [
  {fullName: 'Adriano Imperador', email: 'didico@futebol.br'},
  {fullName: 'Ronalinho Gaúcho', email: 'bruxo@futebol.br'},
  {fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br'},
  {fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br'},
];

const newPlayers = players.reduce((accumulator, currentValeu) => {
  // console.log('accumulator:',  accumulator, 'currentValue:', currentValeu);
  accumulator[currentValeu.fullName] = currentValeu.email;
  return accumulator;
}, {});


console.log(newPlayers);

const expectedValues = {
  'Adriano Imperador': 'didico@futebol.br',
  'Ronalinho Gaúcho': 'bruxo@futebol.br',
  'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
  'Marta Vieira da Silva': 'rainhamarta@futebol.br',
};

assert.deepStrictEqual(newPlayers, expectedValues);



