function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

/******************************************************************************************************
Exercício 1:

O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>


Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

 ******************************************************************************************************/

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {

  let monthList = document.querySelector('#days');
  
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayListItem = document.createElement('li');
    dayListItem.innerHTML = day;
    dayListItem.classList.add('day');

    if(day === 24 || day === 25 || day === 31) {
      dayListItem.classList.add('holiday');
    }

    if(day === 4 || day === 11 || day === 18 || day === 25) {
      dayListItem.classList.add('friday');
    }

    // console.log(dayListItem);
    monthList.appendChild(dayListItem);

  }

}

createDaysOfTheMonth();

/******************************************************************************************************
Exercício 2:

Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

 ******************************************************************************************************/

function createButton(string) {
  let container = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.innerHTML = string;
  button.id = 'btn-holiday';
  container.appendChild(button);
}

createButton('Feriados');


/******************************************************************************************************
Gabarito:

function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
};

createHolidayButton('Feriados');

*******************************************************************************************************/

/******************************************************************************************************
Exercício 3:

Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .

É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

******************************************************************************************************/

function displayHolidays() {
  let holidayButton = document.querySelector('#btn-holiday');
  let monthDaysList = document.querySelector('#days').children;
  // console.log(holidayButton);
  // console.log(monthDaysList);


  holidayButton.addEventListener('click', () => {


    for (let index = 0; index < monthDaysList.length; index += 1) {
      let curentDay = monthDaysList[index];
      if (curentDay.classList.contains('holiday') && curentDay.classList.contains('holiday-active') ) {
       curentDay.style.backgroundColor = "rgb(238,238,238)";
       curentDay.classList.remove('holiday-active');
      }
      else if (curentDay.classList.contains('holiday')) {
        curentDay.style.backgroundColor = "pink";
        curentDay.classList.add('holiday-active');
      }
    }
  });
}

displayHolidays();

/******************************************************************************************************
Gabarito 3:

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

displayHolidays();

******************************************************************************************************/

/******************************************************************************************************
Exercício 4:

Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

Adicione a este botão o ID "btn-friday" .

Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

******************************************************************************************************/


function createFridayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
};

createFridayButton('Sexta-feira');

/******************************************************************************************************
Gabarito 4:

function createFridayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
};

createFridayButton('Sexta-feira');

******************************************************************************************************/

/******************************************************************************************************
Exercicio 5:

Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

******************************************************************************************************/


function displayFridays() {

  let fridayBtn = document.querySelector('#btn-friday');
  let fridayDays = document.querySelectorAll('.friday');
  let daysArray = [];
  let newText = 'SEXTOU o/';

  for(index = 0; index < fridayDays.length; index += 1) {
    let date = fridayDays[index].innerHTML;
    daysArray.push(date);
  }

  fridayBtn.addEventListener('click', () => {
    
    for(let index = 0; index < fridayDays.length; index += 1) {
      let currentDay = fridayDays[index];
      if( currentDay.innerHTML !== newText) {
        currentDay.innerHTML = newText;
      }
      else {
        currentDay.innerHTML = daysArray[index];
      }
    }


  });

}

displayFridays();



/******************************************************************************************************
Gabraito 5:

function displayFridays(fridaysArray) {

  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday-day');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);

******************************************************************************************************/


/******************************************************************************************************
Exercicio 6:

Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
Dica - Propriedade: event.target .

******************************************************************************************************/

let containerDosDias = document.querySelector('#days');

containerDosDias.addEventListener('mouseover', (event) => {
    if ( event.target.tagName === "LI"){
      event.target.style.fontSize = "30px";
    }   
})

containerDosDias.addEventListener('mouseout', (event) => {
  if ( event.target.tagName === "LI"){
    event.target.style.fontSize = "20px";
  }   
})

/******************************************************************************************************
Gabarito 6:

function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver();
dayMouseOut();

******************************************************************************************************/



/******************************************************************************************************
Exercicio 7:

Implemente uma função que adiciona uma tarefa personalizada ao calendário.

A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

******************************************************************************************************/

function createTask(task) {

let myTasks = document.querySelector('.my-tasks');
let taskItem = document.createElement('span');
taskItem.innerHTML = task;
myTasks.appendChild(taskItem);
}

createTask('exemplo');

/************************************************
Gabarito 7:

function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto:');

*************************************************/



/************************************************
Exercício 8:

Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior.

Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .

O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.

O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

*************************************************/


function addCaption(cor) {
  let myTasks = document.querySelector('.my-tasks');
  let newCaption = document.createElement('div');
  
  newCaption.classList.add('task');
  newCaption.style.backgroundColor = cor;
  myTasks.appendChild(newCaption);
}

addCaption('pink');

/************************************************
Gabarito 8:

function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('green');

*************************************************/

/************************************************
Exercício 9:

Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.


Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.


*************************************************/

function selectTask() {
  let tasksContainer = document.querySelector('.my-tasks');

  tasksContainer.addEventListener('click', function(event) {
    if(event.target.classList.contains('task')) {
      if(event.target.classList.contains('selected')) {
        event.target.classList.remove('selected');
      }
      else {
        event.target.classList.add('selected');
      }
    }

  })
};

selectTask();


/************************************************
Gabrito 9:

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

*************************************************/

/************************************************
Exercício 10:

Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.

Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

*************************************************/

function setTaskColorToCalendar() {

  let caledarContiner = document.querySelector('#days');

  caledarContiner.addEventListener('click', function(event) {
    let taskSelected = document.getElementsByClassName('task selected')[0];
    if (taskSelected === undefined) return;
    let taskColor = taskSelected.style.backgroundColor;
    let backgroundColor = 'rgb(238,238,238)';

    if (event.target.tagName === 'LI') {
      console.log(event.target)
        if (event.target.style.backgroundColor === taskColor) {
          event.target.style.backgroundColor = backgroundColor;
      }
      else {
        event.target.style.backgroundColor = taskColor;
      }
    } 
      
    })
}

setTaskColorToCalendar();

/************************************************
Exercício 10 Gabrito:

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

*************************************************/

/************************************************
Bônus:
Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
Ao pressionar a tecla "enter" o evento também deverá ser disparado.
Dica - Propriedade: keyCode .

https://www.w3schools.com/JSREF/event_key_keycode.asp

*************************************************/


function adicionarComprimisso() {
  let botaoAdicionar = document.getElementById('btn-add');
  let containerCompromisso = document.querySelector('.task-list');
  botaoAdicionar.addEventListener('click', function() {
    let compromisso = document.getElementById('task-input').value;
    if(compromisso === "") {
      alert('Favor digitar um compromisso');
    }
    else {
      let itemCompromisso = document.createElement('li');
      itemCompromisso.innerHTML = compromisso;
      containerCompromisso.appendChild(itemCompromisso);
    }
  })
}

adicionarComprimisso();


/************************************************
Bônus Gabarito:

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();
*************************************************/



