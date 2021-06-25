/*********************************************************************
forEach()

 *********************************************************************/

const letters = ['a','b','c','d','e','f','g','h','i','j',];

for (let i = 0; i < letters.length; i += 0) {
  console.log(letters[i]);
}

letters.forEach( () => {
  console.log('Tio Jack');
});

letters.forEach( (value) => {
  console.log(value);
});

letters.forEach( (letter) => {
  console.log(letter);
});

letters.forEach(letter => console.log(letter));

/*********************************************************************
forEach()

 *********************************************************************/





