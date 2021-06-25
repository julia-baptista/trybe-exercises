const numbers = [8, 5, 9, 3, 1, 7, 4, 2, 6, 10];

// const comparar = (a, b) => {
//   if (a < b) {
//     return -1;
//   } else if ( a > b) {
//     return 1;
//   }
//   return 0;
// }

// const comparar2 = (a, b) => {
//   return a -b;
// }


// numbers.sort(comparar);
// numbers.sort(comparar2);


numbers.sort((a, b) => a - b);
// numbers.sort((a, b) => b - a);
console.log(numbers);


