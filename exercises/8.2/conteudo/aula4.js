/****************************************************
 
arr.some();

apenas um tem que passar no teste

 ****************************************************/

const pizzas = [
  {flavor: 'Frango com Catupiry', price: 12.20},
  {flavor: 'Margerita', price: 13.50},
  {flavor: 'Gratinada', price: 15.32},
  {flavor: 'Quatro Queijos', price: 13.63},
];

const priceLessThan13 = (pizzas) => {
  let result = false;

  pizzas.forEach((pizza) => {
    if (pizza.price < 13) {
      result = true;
    }
  })
  return result;
}

console.log(priceLessThan13(pizzas));


const priceLessThan14 = (pizzasArray) => {
  return pizzasArray.some((pizza) => {
    return pizza.price < 10;
  });
}

console.log(priceLessThan14(pizzas));


// const priceLessThan14 = pizzasArray => pizzasArray.some((pizza) => pizza.price < 10);
// const priceLessThan14 = pizzas.some((pizza) => pizza.price < 10);








