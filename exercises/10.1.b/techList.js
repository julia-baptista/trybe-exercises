const techList = (technologies, name) => {
  if (technologies.length === 0) return 'Vazio!';

  return technologies.sort().map((item) => {
    const obj = {
      tech: item,
      name,
    }
    return obj;
  });
}


// console.log(list(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));


module.exports = techList;


/****************************************************
Gabrito:

// techList.js
const techList = (arrayTechnologies, name) => {
  if (arrayTechnologies.length === 0) return 'Vazio!';

  const technologyList = arrayTechnologies
    .sort()
    .map((technology) => ({
    tech: technology,
    name,
    }));
  return technologyList;
};


module.exports = techList;

***************************************************/

