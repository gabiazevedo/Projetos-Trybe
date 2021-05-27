// Cria div mãe;

const divMain = document.createElement('div');
divMain.id = 'div-main';
document.body.appendChild(divMain);

// Cria cabeçalho;

const header = document.createElement('header');
header.innerText = 'Minha Lista de Tarefas 📝';
header.id = 'cabecalho';
header.style = 'font-family: Habibi, serif';
divMain.appendChild(header);

// Cria título;

const paragraph = document.createElement('p');
paragraph.id = 'funcionamento';
paragraph.innerText = '✅ Clique duas vezes em um item para marcá-lo como completo';
divMain.appendChild(paragraph);

// Cria div para abrigar o input de informações;

const divInput = document.createElement('div');
divInput.id = 'inputs';
divMain.appendChild(divInput);

// Cria input;

const input = document.createElement('input');
input.id = 'texto-tarefa';
input.type = 'text';
divInput.appendChild(input);

// Cria botão;

const button = document.createElement('button');
button.id = 'criar-tarefa';
button.innerText = 'Criar Tarefa';
divInput.appendChild(button);

const orderList = document.createElement('ol');
orderList.id = 'lista-tarefas';
divInput.appendChild(orderList);

const createTask = document.getElementById('criar-tarefa');

createTask.addEventListener('click', () => {
  const listItem = document.createElement('li');
  listItem.style = 'font-family: Habibi, serif';
  listItem.innerText = input.value;
  input.value = '';
  orderList.appendChild(listItem);
});

// Cria função de click para adicionar ou remover tarefa tarefa 

function click() {
  orderList.addEventListener('click', (event) => {
    const selectedItem = document.querySelector('.selected');
    if (selectedItem) {
      selectedItem.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}
click();

function doubleClick() {
  orderList.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}
doubleClick();

// Cria div para abrigar outros botões;

const divInputs2 = document.createElement('div');
divInputs2.id = 'other-buttons';
divMain.appendChild(divInputs2);

const apagaTudo = document.createElement('button');
apagaTudo.id = 'apaga-tudo';
apagaTudo.innerText = 'Apaga Tudo';
divInputs2.appendChild(apagaTudo);

function deleteAll() {
  apagaTudo.addEventListener('click', () => {
    const listaOrdenada = document.querySelectorAll('li');
    for (let index = 0; index < listaOrdenada.length; index += 1) {
      listaOrdenada[index].remove();
    }
  });
}
deleteAll();

// Cria botão e função de evento para remover tarefas finalizadas

const removeFinalizados = document.createElement('button');
removeFinalizados.id = 'remover-finalizados';
removeFinalizados.innerText = 'Limpar Completos';
divInputs2.appendChild(removeFinalizados);

function deleteCompleted() {
  removeFinalizados.addEventListener('click', () => {
    const listaOrdenada = document.querySelectorAll('.completed');
    for (let index = 0; index < listaOrdenada.length; index += 1) {
      listaOrdenada[index].remove();
    }
  });
}
deleteCompleted();

// Cria botão e funçã de evento salvar tarefas

const saveTasks = document.createElement('button');
saveTasks.id = 'salvar-tarefas';
saveTasks.innerText = 'Salvar';
divInputs2.appendChild(saveTasks);

function salvarTarefas() {
  const taskList = document.querySelector('#lista-tarefas');
  saveTasks.addEventListener('click', () => {
    localStorage.setItem('listItems', taskList.innerHTML);
  });
  taskList.innerHTML = localStorage.getItem('listItems');
}
salvarTarefas();

//Cria botões pra cima e pra baixo

const moveUp = document.createElement('button');
moveUp.innerText = 'Pra Cima';
moveUp.classList = 'mover-cima';
divInputs2.appendChild(moveUp);

const moveDown = document.createElement('button');
moveDown.innerText = 'Pra Baixo';
moveDown.classList = 'mover-baixo';
divInputs2.appendChild(moveDown);

// Funções de evento dos botões mover pra cima e pra baixo 

moveUp.addEventListener('click', () => {
const liMoveUp = document.querySelectorAll('li');
for (let index = 0; index < liMoveUp.length; index += 1) {
  const listMoveUp = liMoveUp[index];
  if (listMoveUp.classList.contains('selected') && index > 0) {
    orderList.removeChild(listMoveUp);
    orderList.insertBefore(listMoveUp, orderList.children[index - 1]);
  }
}
});

moveDown.addEventListener('click', () => {
const liMoveDown = document.querySelectorAll('li');
for (let index = 0; index < liMoveDown.length; index += 1) {
  const listMoveDown = liMoveDown[index];
  if (listMoveDown.classList.contains('selected') && index < (liMoveDown.length - 1)) {
    orderList.removeChild(listMoveDown);
    orderList.insertBefore(listMoveDown, orderList.children[index + 1]);
  }
}
});

// Cria botão 'remove selecionados'

const removeSelected = document.createElement('button');
removeSelected.innerText = 'Remover Selecionados';
removeSelected.classList = 'remover-selecionado';
divInputs2.appendChild(removeSelected);

removeSelected.addEventListener('click', () => {
  const selectedColor = document.querySelectorAll('.selected');
  for (let index = 0; index < selectedColor.length; index += 1) {
  const colors = selectedColor[index];
  orderList.removeChild(colors);
  }
  }); 