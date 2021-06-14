const estadosDoBrasil = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

const siglasEstados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];


function criarEstados() {
  const estadosPai = document.querySelector('#state');
  
  for (let i = 0; i < estadosDoBrasil.length; i += 1) {
    const elOpion = document.createElement('option');
    elOpion.innerHTML = estadosDoBrasil[i];
    elOpion.value = siglasEstados[i];
    estadosPai.appendChild(elOpion);
  }
}
criarEstados();


let inputs = {
  name: {
    type: 'text',
    maxLength: 40,
    required: true,
  },
  email: {
    type: 'text',
    maxLength: 50,
    required: true
  },
  cpf: {
    type: 'text',
    maxLength: 11,
    required: true
  },
  address: {
    type: 'text',
    maxLength: 200,
    required: true
  },
  city: {
    type: 'text',
    maxLength: 28,
    required: true,
  },
  state: {
    type: 'select',
    required: true,
  },
  houseType: {
    type: 'radio',
    required: true,
  },
  resume: {
    type: 'textarea',
    maxLength: 1000,
    required: true,
  },
  role: {
    type: 'text',
    maxLength: 40,
    required: true,
  },
  roleDescription: {
    type: 'text',
    maxLength: 500,
    required: true,
  },
  startDate: {
    type: 'date',
    required: true,
  }
}

let errorMessages = [];

function defaultValidation() {
  for(let name in inputs) {
    // const elTitele = name;
    const element = inputs[name];
    
    if (element.type === 'text') {
      let input = document.querySelector(`#${name}`);
      let trimmed = input.value.trim();
      let label = document.querySelector(`label[for=${name}]`).innerText; 

      if(inputs[name].required && trimmed.length === 0) {
        errorMessages.push(`É necessário preencher o campo ${label}`);
      }
    }    
  }
}
defaultValidation();

console.log(errorMessages);





















function validarData(input) {
  if(input.value.length === 0) {

  }

}

function handleSubmit(event) {
  event.preventDefault();
}

function clearFields() {
  let formElements = document.querySelectorAll('input');
  let textAreas = document.querySelectorAll('textarea');

  for (let index = 0; index < formElements.length; index += 1) {
    let userInput = formElements[index];
    userInput.value = '';
  }

  for (let index = 0; index < textAreas.length; index += 1) {
    let userTexrarea = textAreas[index];
    userTexrarea.value = '';
  }
}





window.onload = function() {

  const submitButton = document.querySelector('.submit-button');
  submitButton.addEventListener('click', handleSubmit);

  const clearButton = document.querySelector('.clear-button');
  clearButton.addEventListener('click', clearFields);

}
