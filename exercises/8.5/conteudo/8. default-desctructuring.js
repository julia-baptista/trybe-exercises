const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality } = person;

console.log(nationality);  // udifined



const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian


