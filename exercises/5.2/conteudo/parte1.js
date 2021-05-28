// 1.Acesse o elemento elementoOndeVoceEsta .
let OndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// 2.Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. 
OndeVoceEsta.parentElement.style.color = "blue";

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

document.getElementById('primeiroFilhoDoFilho').innerText = "Texto do primeiroFilhoDoFilho";

// 4. Acesse o primeiroFilho a partir de pai .
document.getElementById('pai').firstElementChild;

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta
OndeVoceEsta.previousElementSibling;

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta
OndeVoceEsta.nextSibling;

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
OndeVoceEsta.nextElementSibling;

// 8. Agora acesse o terceiroFilho a partir de pai.
document.getElementById('pai').children[2];



