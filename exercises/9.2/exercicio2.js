const fetchPromisse = new Promise((resolve, reject) => {
  let myArray = [];
  for (let i = 0; i < 10; i += 1) {
    const number = Math.floor(Math.random() * 50) + 1;
    const square = Math.pow(number, 2);
    myArray.push(square);
  }

  const count = myArray.reduce((acc, curr) => {
    return acc + curr;
  })
  console.log(count);

  if(count < 8000) {
    resolve();
  } else {
    reject();
  } 
})
.then(()=> console.log('Promise resolvida'))
.catch(() => console.log('Promise rejeitada'));


/**************************************************************************
Gabarito:

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(number => number * number)
                       .reduce((sum, number) => sum + number);

    (sum < 8000) ? resolve() : reject();
  });

  myPromise
    .then(() => console.log('Promise resolvida'))
    .catch(() => console.log('Promise rejeitada'));
};

fetchPromise();


*************************************************************************/


