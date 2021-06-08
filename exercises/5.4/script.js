function alterarCordeFundo() {
  let fundo = document.body;
  let myInput = document.getElementById('fundo');
  let botao = document.getElementById('btnFundo');

  botao.addEventListener('click', () => {
    let color = myInput.value;  
    fundo.style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
  })
 
}

alterarCordeFundo();


function alterarCordoTexto() {
  let paragrafos = document.querySelectorAll('p');
  let myInput = document.getElementById('corTexto');
  let botao = document.getElementById('btnCorTexto');

  botao.addEventListener('click', () => {
    let color = myInput.value;
    for (let i = 0; i < paragrafos.length; i += 1) {
      paragrafos[i].style.color = color;
    }
    localStorage.setItem("corDoTexto", color);
  })
 
}

alterarCordoTexto();