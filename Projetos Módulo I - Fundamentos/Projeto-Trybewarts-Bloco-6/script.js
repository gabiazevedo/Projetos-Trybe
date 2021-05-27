// Criar um addEventListener no botão LOGAR.
const loginButton = document.getElementById('login-button');
// Dentro da funçao que é executada ao clicar no botão, deve-se verificar se o email.
// que esta no input de email é igual a tryber@teste.com e senha igual a 123456.
loginButton.addEventListener('click', () => {
  if (
    document.getElementById('login').value !== 'tryber@teste.com'
    && document.getElementById('senha').value !== '123456'
  ) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

// Criar constante que recebe o botao Submit
const agreementCheck = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
agreementCheck.addEventListener('click', () => {
  if (document.getElementById('agreement').checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

// Contador
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
let tamanho = 500;
textArea.addEventListener('keyup', () => {
  // Diminuir do counter o tamanho atual do textos
  tamanho = 500 - textArea.value.length;
  counter.innerHTML = tamanho;
});

// guardar dados do formulário
function formataDados(materias) {
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const familia = document.querySelector('input[name="family"]:checked').value;
  const avaliacao = document.querySelector('input[name="rate"]:checked').value;
  const observacoes = document.getElementById('textarea').value;
  return `Nome: ${nome} ${sobrenome} <br>
  Email: ${email} <br>
  Casa: ${casa} <br>
  Família: ${familia} <br>
  Matérias: ${materias} <br>
  Avaliação: ${avaliacao} <br>
  Observações: ${observacoes}`;
}

// Imprimir informações guardadas no formulário
const evaluationForm = document.forms.namedItem('evaluation-form');
evaluationForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const materiasArray = [];
  let materias = '';
  for (let index = 0; index < 6; index += 1) {
    if (document.getElementsByClassName('subject')[index].checked) { // if verifica se checked do elemento atual da lista de elementos que possuem a classe (subject) está ativa ou seja, true // se for então
      materiasArray.push(document.getElementsByClassName('subject')[index].value);
    }
  }
  materias = materiasArray.join(', ');
  const textoForm = formataDados(materias);
  // Apagar formulário ao recarregar página
  for (let i = 0; i < 5; i += 1) {
    evaluationForm.lastElementChild.remove();
  }

  evaluationForm.innerHTML = textoForm;
});
