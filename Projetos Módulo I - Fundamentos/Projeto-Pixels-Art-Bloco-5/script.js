// Criação do Título
const title = document.getElementById('title');
title.style = 'font-family: Press Start 2P, cursive';

// Criando paleta de cores

const colorsPalette = document.createElement('section');
colorsPalette.id = 'color-palette';
document.body.appendChild(colorsPalette);

function colorPalette() {
  for (let index = 0; index < 4; index += 1) {
    const colors = document.createElement('div');
    colors.classList.add('color');
    colorsPalette.appendChild(colors);
  }
  const firstColor = document.querySelector('.color');
  firstColor.style.backgroundColor = 'black';
  firstColor.classList.add('selected');
}
colorPalette();

// Criando função de cores aleatórias

function randomColor() {
  const randomColors = document.querySelectorAll('.color');
  for (let index = 1; index < randomColors.length; index += 1) {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    randomColors[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}
randomColor();

// Criando seção para abrigar botões

const sectionButtons = document.createElement('section');
sectionButtons.id = 'buttons';
document.body.appendChild(sectionButtons);

// Criando o botão 'limpar'

const button = document.createElement('button');
button.innerText = 'Limpar';
button.id = 'clear-board';
sectionButtons.appendChild(button);

// Criando o botão input 

const input = document.createElement('input');
input.id = 'board-size';
input.type = 'number';
input.min = 1;
input.max = 50;
sectionButtons.appendChild(input);

// Criando o botão 'VQV'

const button2 = document.createElement('button');
button2.innerText = '#VQV';
button2.id = 'generate-board';
sectionButtons.appendChild(button2);

// Criando div para abrigar pixel board

const divPixels = document.createElement('div');
divPixels.id = 'pixel-board';
document.body.appendChild(divPixels);

// Criando função de evento que limpa o quadro

function changeColor() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    const removeColor = pixels[index];
    removeColor.style.backgroundColor = 'white';
  }
}
button.addEventListener('click', changeColor);

// Função que cria o pixel board dinâmicamente

function createBoard(boardSize = 5) {
  if (boardSize <= 5) {
    boardSize = 5;
    }
    if (boardSize > 50) {
    boardSize = 50;
    } 

for (let index1 = 0; index1 < boardSize; index1 += 1) {
  const tableLines = document.createElement('tr');
  tableLines.classList = 'line';

  for (let index2 = 0; index2 < boardSize; index2 += 1) {
    const columnLines = document.createElement('td');
    columnLines.classList = 'pixel';
    columnLines.addEventListener('click', (event) => {
      if (document.querySelector('.selected') !== null) {
        const color = document.querySelector('.selected').style.backgroundColor;
        event.target.style.backgroundColor = color;
      }
    });
    tableLines.appendChild(columnLines);
  }
  divPixels.appendChild(tableLines);
}
}
createBoard();

// Evento de click que aumenta o pixel board

button2.addEventListener('click', () => {
  if (input.value === '') {
    alert('Board Inválido!');
  } else {
  clearBoard();
  createBoard(input.value);
  changeColor();
  }
});

function clearBoard() {
  divPixels.innerHTML = '';
}

// Criando evento que seleciona a cor desejada da paleta de cores

  const firstEventButton = document.getElementById('color-palette');
  firstEventButton.addEventListener('click', (event) => {
    if (document.querySelector('.selected') !== null) {
      (document.querySelector('.selected').classList.remove('selected'));
    }
    event.target.classList.add('selected');
  });

// Criar seção para abrigar as imagens

const sectionPictures = document.createElement('section');
document.body.appendChild(sectionPictures);

// Cria h1 com título da seção de imagens

const title2 = document.createElement('h1');
title2.classList = 'title2';
title2.innerText = 'Escolha seu desenho favorito para pintar!';
sectionPictures.appendChild(title2);

// Cria div para abrigar imagens

const divPictures = document.createElement('div');
divPictures.classList = 'pictures';
sectionPictures.appendChild(divPictures);

// Cria div yoshi

const divYoshi = document.createElement('div');
divYoshi.id = 'yoshi';
divPictures.appendChild(divYoshi);

// Cria div flower

const divFlower = document.createElement('div');
divFlower.id = 'flower';
divPictures.appendChild(divFlower);

// Cria div groot

const divGroot = document.createElement('div');
divGroot.id = 'groot';
divPictures.appendChild(divGroot);

// Cria div sonic

const divSonic = document.createElement('div');
divSonic.id = 'sonic';
divPictures.appendChild(divSonic);



