// 1. Trasnforme (Mapei) o array de objetos cities em um array de strins com o seguinte formato:
// ${nomeDaCidade} - ${siglaDoEstado}


// let citiesAndStates = []

// for (let index = 0; index < cities.length; index +=1) {
//   citiesAndStates.push(`${cities[index].name} - ${cities[index].satate}`)
// }

// console.log(citiesAndStates);



let citiesAnsStates = cities.map((city) => {
  return `${city.name} - ${city.satate}`
})

console.log(citiesAndStates);


