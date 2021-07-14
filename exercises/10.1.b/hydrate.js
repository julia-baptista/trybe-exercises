const hydrate = (string) => {
  const stringOfDrinks = string.match(/[0-9]+/g);
  numberOfDrinks = stringOfDrinks.map(num => parseInt(num));
  const sum = numberOfDrinks.reduce((acc, curr) => acc + curr);
  const pluralGlass = sum === 1 ? 'copo' : 'copos';
  return `${sum} ${pluralGlass} de água`;
}

module.exports = hydrate;


/**********************************************************
Gabarito:

// hydrate.js
const hydrate = (string) => {
  const splitString = string.split('');
  const result = splitString.reduce((glassesOfWater, character) => {
    let parsedCharacter = parseInt(character);
    let checkCharacter = isNaN(parsedCharacter) === false;
    if (checkCharacter) { return glassesOfWater + parsedCharacter };
    return glassesOfWater;
  }, 0);

  const pluralGlass = result === 1 ? 'copo' : 'copos';
  return `${result} ${pluralGlass} de água`;
};

module.exports = hydrate;

**********************************************************/