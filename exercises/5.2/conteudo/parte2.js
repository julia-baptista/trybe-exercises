/*****************************************
Parte II - Criando Elementos

.createElement();
.appendChild();
 ****************************************/

let ingredientItems = [
  '500g de feijão carioquinha cozido',
  '200g de toucinho',
  '1 concha de óleo'
];

let ingredientList = document.querySelector('.ingredients-list');

for (let index = 0; index < ingredientItems.length; index += 1) {
  let ingredient = ingredientItems[index];

  let ingredientListItem = document.createElement('li');
  ingredientListItem.innerText = ingredient;
  ingredientListItem.className = 'ingredients-list-item';

  ingredientList.appendChild(ingredientListItem);

}

// 1. Crie um irmão para elementoOndeVoceEsta
let irmao = document.createElement('div');
irmao.innerText = 'irmão';
irmao.id = 'irmao';
document.getElementById('elementoOndeVoceEsta').parentNode.appendChild(irmao);


// 2. Crie um filho para elementoOndeVoceEsta .
let filho = document.createElement('div');
filho.innerText = "filho para elementoOndeVoceEsta";
filho.id = 'filho';
document.getElementById('elementoOndeVoceEsta').appendChild(filho);


// 3. Crie um filho para primeiroFilhoDoFilho .
let filhoParaPimeiroFilhoDoFilho = document.createElement('div');
filhoParaPimeiroFilhoDoFilho.innerText = "filho para Pimeiro FilhoDoFilho";
filhoParaPimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
document.getElementById('primeiroFilhoDoFilho').appendChild(filhoParaPimeiroFilhoDoFilho);


//4. A partir desse filho criado, acesse terceiroFilho .
document.getElementById('filhoPrimeiroFilhoDoFilho').parentNode.nextElementSibling;


/*************************************
Parte III - Removendo elementos
 **************************************/

let ingredientListItems = document.querySelectorAll('.ingredients-list-item');


for (let index = 0; index < ingredientListItems.length; index += 1 ) {
  let element = ingredientListItems[index];

  if(element.innerText.includes('toucinho')) {
    ingredientList.removeChild(element);
  }
}











