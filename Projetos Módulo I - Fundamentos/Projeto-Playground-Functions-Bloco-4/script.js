// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  let sentenceSplited = sentence.split(' ');
  return sentenceSplited;
}

// Desafio 4
function concatName(array) {
  let firstPosition = array[0];
  let lastPosition = array[array.length - 1];
  let pontuation = ', ';

  return lastPosition + pontuation + firstPosition;
}

// Desafio 5
function footballPoints(wins, ties) {
  let numberOfWins = wins * 3;
  let numberOfTies = ties * 1;

  return numberOfWins + numberOfTies;
}

// Desafio 6
function highestCount(numbersArray) {
  let biggerNumber = Math.max.apply(null, numbersArray);
  let timesOfBiggerNumberAppears = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (biggerNumber === numbersArray[index]) {
      timesOfBiggerNumberAppears += 1;
    }
  }
  return timesOfBiggerNumberAppears;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function check(number) {
  if (number % 15 === 0) {
    return 'fizzBuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(numbers) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < numbers.length; index += 1) {
    arrayFizzBuzz.push(check(numbers[index]));
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(string) {
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');
  return string;
}
function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
}

// Desafio 10
function techList(array, name) {
  let lista = array;
  let object;

  if (lista.length === 0) {
    object = 'Vazio!';
  } else {
    let objects = [];
    lista = lista.sort();

    for (let index = 0; index < lista.length; index += 1) {
      objects.push(
        { tech: lista[index], name },
      );
    }
    object = objects;
  }
  return object;
}

// Desafio 11
function checkRepetitions(num, nuns) {
  let counter = 0;
  for (let index = 0; index < nuns.length; index += 1) {
    if (num === nuns[index]) {
      counter += 1;
    }
  }
  return counter;
} 

function validateNumber(numbers) {
  for (let index1 = 0; index1 < numbers.length; index1 += 1) {
    let counter1 = checkRepetitions(numbers[index1], numbers);
    if (counter1 >= 3) {
      return false;
    }
  }
  return true;
}

function generatePhoneNumber(numbers) {
if (numbers.length !== 11) {
  return 'Array com tamanho incorreto.';
}
if (validateNumber(numbers) === false) {
  return 'não é possível gerar um número de telefone com esses valores';
}
if (numbers.some((number) => number < 0)) {
  return 'não é possível gerar um número de telefone com esses valores';
}
if (numbers.some((number) => number > 9)) {
  return 'não é pssível gerar um número de telefone com esses valores';
}
return `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}\
${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}\
${numbers[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
let abResult = lineA + lineB;
let acResult = lineA + lineC;
let cbResult = lineC + lineB;

let diferenceA = Math.abs(lineC - lineB);
let diferenceB = Math.abs(lineA - lineC);
let diferenceC = Math.abs(lineA - lineB);

if ((lineA < cbResult && lineA > diferenceA) 
|| (lineB < acResult && lineB > diferenceB)
|| (lineC < abResult && lineC > diferenceC)) {
  return true;
}
return false;
}

// Desafio 13
function numIntoArray(str) {
  let arrayNumber = str.match(/\d+/g);
  return arrayNumber;
}

function hydrate(phrase) {
  let glassesOfWater = numIntoArray(phrase);
  let sum = 0;
  for (let index = 0; index < glassesOfWater.length; index += 1) {
    sum += parseInt(glassesOfWater[index], 10);
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  if (sum > 1) {
    return `${sum} copos de água`;
  }
}
