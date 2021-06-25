/*************************************************************

HOF: Higher Order Functions

forEach();   -->  Percorrer um array e executar uma função para cada elemento 
                  (alternativa ao loop for)
find();   -->  Procurar o primeiro elemento que satisfaça a condição passada
some();  -->  Quer saber se pelo menos um elemento do seu array satisfaz uma condição
every();  --> Se todos os elementos de um array satisfazem uma condição
filter(); --> Trazer todos os elementos que satisfazem uma condição
sort();  --> Ordenar um array
reduce(); --> reduz
spread operator
rest
destructuring
map(); --> forEach com a saída de uma nova lista

***************************************************************/


const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;

const calculator = (func) => func(10, 5);


console.log(sum(10,5));
console.log(sub(10,5));

console.log(calculator(sum));
console.log(calculator(sub));

/*************************************************************
HOF nos permitem compactar ações e não somente repassar valores:

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log);

***************************************************************/


/*************************************************************
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});
***************************************************************/


/*************************************************************

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

***************************************************************/


