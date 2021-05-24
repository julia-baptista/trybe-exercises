var statusCarro = "desligado";
var aceleracao = 0;
var rotacaoDoVolante = 0;


function ligarDesligar() {
  if(statusCarro === "desligado") {
    statusCarro = "ligado";
  } else {
    statusCarro = "desligado";
  }
  return statusCarro;
}

function acelerar(incremento) {
  aceleracao = aceleracao + incremento;
  return "Acelerando a " + aceleracao + "m/s";
}

function frear(decremento) {
  aceleracao = aceleracao - decremento;
  return "Desacelerando para " + aceleracao + "m/s";
}

function girarVolante(anguloRotacao) {
  rotacaoDoVolante = anguloRotacao;
  return rotacaoDoVolante + "°";
}






