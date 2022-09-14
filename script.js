// requisito 3
function login() {
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  if ((email.value === 'tryber@teste.com') && (password.value === '123456')) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
const button = document.querySelector('#btn');
button.addEventListener('click', login);

// requisito 18
const labelinfos = document.querySelector('#agreement');
function submit() {
  const buttonSubmit = document.querySelector('#submit-btn');
  if (labelinfos.checked === true) {
    buttonSubmit.removeAttribute('disabled');
  } else {
    buttonSubmit.setAttribute('disabled', 'disabled');
  }
}
labelinfos.addEventListener('click', submit);

// requisito 20
const counter = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');
const maxCharacters = 500;
function counterCharacters(event) {
  const descricao = textarea.value.length;
  const restante = maxCharacters - descricao;
  counter.innerText = restante;
  if (restante === 0) {
    event.preventDefault();
  }
}
textarea.addEventListener('keyup', counterCharacters);
