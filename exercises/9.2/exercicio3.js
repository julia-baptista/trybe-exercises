const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(number => number * number)
                       .reduce((sum, number) => sum + number);
    console.log(sum);

    (sum < 8000) ? resolve(sum) : reject();
  });

  myPromise
    .then((number) => {
      const dividers = [2, 3, 5, 10];
      const array = dividers.map((num) => number / num);
      console.log(array);
    })
    .catch(() => console.log('Promise rejeitada'));
};

fetchPromise();



/************************************************************
Gabarito:

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(number => number * number)
                       .reduce((number, acc) => number + acc, 0);

    (sum < 8000) ? resolve(sum) : reject();
  });

  myPromise
    .then(sum => [2, 3, 5, 10].map(number => sum / number))
    .catch(() => console.log('Promise rejeitada'));
};

fetchPromise();

***********************************************************/



