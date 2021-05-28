/**************************************
Parte III - Removendo elementos
***************************************/

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho 

let filhosDoPai = document.getElementById('pai').children;


for(let index = 0; index < filhosDoPai.length; index += 1) {
 let element = filhosDoPai[index];

  if ( element.id !== 'elementoOndeVoceEsta') {
    element.parentNode.removeChild(element);
  }
}

// console.log(filhosDoPai.length);


console.log(filhosDoPai);











