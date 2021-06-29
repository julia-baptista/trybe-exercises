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


// 3. Encontre toas as cidades que comecem com a letra C


// const citiesC = cities.filter((city)=> {
//   return city.name[0] === 'C';
// })

// console.log(citiesC );


const citiesC = cities.filter((city)=> {
  return city.name.startsWith('C');
  // return city.name.endsWith('o');
})

console.log(citiesC );




