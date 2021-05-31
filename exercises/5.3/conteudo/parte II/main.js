const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/****************************8****************
 1. Copie esse arquivo e edite apenas ele;
 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
  2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
**********************************/

function handleChangeTech(event) {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}

divUm.addEventListener('click', handleChangeTech);
divDois.addEventListener('click', handleChangeTech);
divTres.addEventListener('click', handleChangeTech);


/* 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';*/

input.addEventListener('keyup', alterTextInTech)

function alterTextInTech() {
  let tech = document.querySelector('.tech');
  tech.innerHTML = input.value;
}

/*********************************
Gabarito:

input.addEventListener('input', (event) => {
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
});

************************************/


/* 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;*/

myWebpage.addEventListener('dblclick', goToWebpage);

function goToWebpage() {
  window.open('https://www.betrybe.com/');
}

/*********************************
Gabarito:

myWebpage.addEventListener('dblclick', () => {
  window.location.replace('https://blog.betrybe.com/');
});

************************************/


// 4.1. Que tal redirecionar para seu portifólio?

myWebpage.addEventListener('dblclick', goToWebpage);

function goToWebpage() {
  window.open('https://julia-baptista.github.io/');
}


// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;

myWebpage.addEventListener('mouseover', () => {

  myWebpage.style.color = 'pink';

});


/* Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.