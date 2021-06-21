// Local e Session Storage

/**********************************************************************
HTML Web Storage provê dois objetos para armazenamento de dados no cliente ( browser da pessoa), no formato de chave-valor de um modo mais intuitivo do que nos Cookies :

localStorage - salva os dados sem data de expiração . Os dados não serão removidos quando o browser for fechado, ou seja, eles ficarão disponíveis enquanto não forem explicitamente removidos.

Exemplo de utilização:
*********************************************************************/



/*****************  localStorage: ****************************

console.log(localStorage);
console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0
localStorage.setItem("firstname", "Adam"); //salva uma entrada com a key = "firstname" e value = "Adam"
console.log(localStorage);
localStorage.setItem("lastname", "Smith"); //salva uma entrada com a key = "lastname" e value = "Smith"
console.log(localStorage.getItem('lastname')); // retorna o valor "Smith"
console.log(localStorage.length); // possui duas entradas, então o retorno é o valor: 2
localStorage.removeItem("lastname"); // remove a entrada referente a key = "lastname"
console.log(localStorage.length); // possui uma entrada, então o retorno é o valor: 1
localStorage.clear();
console.log(localStorage.length);
*********************************************************************/





/*****************  sessionStorage: ****************************

console.log(sessionStorage.length) // não possui nada salvo, então o retorno é o valor: 0
sessionStorage.setItem("firstname", "Adam") //salva uma entrada com a key = "firstname" e value = "Adam"
sessionStorage.setItem("lastname", "Smith") //salva uma entrada com a key = "lastname" e value = "Smith"
console.log(sessionStorage.getItem("lastname")) // retorna o valor "Smith"
console.log(sessionStorage.length) // possui duas entradas, então o retorno é o valor: 2
sessionStorage.removeItem("lastname") // remove a entrada referente a key = "lastname"
console.log(sessionStorage.length) // possui uma entrada, então o retorno é o valor: 1
sessionStorage.clear() // limpa todas as entradas salvas em sessionStorage
console.log(sessionStorage.length) // não possui nada salvo, então o retorno é o valor: 0

********************************************************************/

// É possível salvar outras estruturas em localStorage e sessionStorage :

let organization = {
  name: "trybe",
  since: 2019
}

// objeto "storage" pode ser localStorage ou sessionStorage

storage.setItem("trybe", JSON.stringify(organization));
let org = JSON.parse(storage.getItem("trybe"));
console.log(org); // { name: "trybe", since: 2019 }

let classes = ["2019/set", "2019/oct"];
storage.setItem("classes", JSON.stringify(classes));
let cls = JSON.parse(storage.getItem("classes"));
console.log(cls); // ["2019/set", "2019/oct"]


















