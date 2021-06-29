const states = [
  {short: "AM", name: "Amazonas"},
  {short: "PA", name: "Pará"},
  {short: "TO", name: "Tocantins"},
  {short: "MG", name: "Minas Gerais"},
  {short: "BA", name: "Bahia"},
  {short: "PR", name: "Paraná"},
  {short: "SP", name: "São Paulo"},
  {short: "RN", name: "Rio Grande do Norte"},
  {short: "CE", name: "Ceará"},
];

const cities = [
  {state: 'AM', name: 'Manaus', region: 'N'},
  {state: 'PA', name: 'Belém', region: 'N'},
  {state: 'TO', name: 'Porto Nacional', region: 'N'},
  {state: 'MG', name: 'Nepomuceno', region: 'SE'},
  {state: 'BA', name: 'Cachoeira', region: 'NE'},
  {state: 'PR', name: 'Curitiba', region: 'S'},
  {state: 'SP', name: 'Hortolândia', region: 'SE'},
  {state: 'RN', name: 'Touros', region: 'NE'},
  {state: 'CE', name: 'Jericoacoara', region: 'NE'},
  {state: 'TO', name: 'Três Pedras', region: 'N'},
  {state: 'MG', name: 'João Pinheiro', region: 'SE'},
];

const regions = [
  {short: "N", name: "Norte"},
  {short: "NE", name: "Nordeste"},
  {short: "CW", name: "Centroeste"},
  {short: "SE", name: "Sudeste"},
  {short: "S", name: "Sul"},
];


const arrayCities = cities.map((city) => {

  const findState = states.find((state) => {
    return state.short === city.state;
  });

  const findRegion = regions.find((region) => {
    return region.short === city.region;
  });

  return {
    state: findState.name,
    city: city.name,
    region: findRegion.name
  }
});

console.log(arrayCities)

