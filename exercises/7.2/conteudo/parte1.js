// Parte I - Adicionando novas chaves (keys)


const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

// customer.lastName = 'Faria';
// customer['lastName'] = 'Faria';

// let newKey = 'lastName';
// const lastName = 'Ferreira';
// customer[newKey] = lastName;
// newKey = 'fullName';
// const fullName = `${customer.firstName} ${customer.lastName}`;
// customer[newKey] = fullName;



function criaObjeto(objeto, chave, valor) {
  let newKey =  `${chave}`;
  chave = `${valor}`;
  objeto[newKey] = chave;

  console.log(objeto);
}

criaObjeto(customer, 'lastName', 'Faria');

function criaObjeto2(objeto, chave, valor) {
  objeto[`${chave}`] = `${valor}`;
  console.log(objeto);
}

criaObjeto2(customer, 'lastName', 'Faria');
