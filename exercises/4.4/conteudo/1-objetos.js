// Video vai ensinar sobre objetos

/*
O objeto é um tipo de dado que nos permite armazenar entradas no formato:
chave: valor
*/

let singer = {
  name: 'Milton',
  lastName: 'Nascimento',
  nickname: 'Bituca',
  age: 77,
  bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
  bornInfo: {
    city:  'Rio de Janeiro',
    state: 'Rio de Janeiro'
  }
};

// Acessando os dados:
console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.');
console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos.');

// As chaves são muito utilizadas para criar propriedades novas de forma dinâmica:

singer['fullName'] = singer.name + ' ' + singer.lastName;

console.table(singer);

console.log('O cantor ' + singer.fullName+ ' nasceu no estado do ' + + singer.bornInfo.state);

// if chave 'last-name', tem que colocar entre colchete e usar as chaves para acessar o valor.











