// variaveis globais
const form = document.getElementById('evaluation-form');
const inputName = document.getElementById('input-name');
const inputlastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const house = document.getElementById('house');
const radioFamily = document.getElementsByClassName('radio-family');
const subject = document.getElementsByClassName('subject');
const radioRate = document.getElementsByClassName('radio-rate');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const labelinfos = document.querySelector('#agreement');
const buttonSubmit = document.querySelector('#submit-btn');
const formData = document.getElementById('form-data');

// requisito 3
const button = document.querySelector('#btn');
function login() {
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  if ((email.value === 'tryber@teste.com') && (password.value === '123456')) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
button.addEventListener('click', login);

// requisito 18
function submit() {
  if (labelinfos.checked === true) {
    buttonSubmit.removeAttribute('disabled');
  } else {
    buttonSubmit.setAttribute('disabled', 'disabled');
  }
}
labelinfos.addEventListener('click', submit);

// requisito 20
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

// requisito 21

function creatData(data) {
  const p = document.createElement('p');
  p.innerText = data;
  formData.appendChild(p);
}

function familyChecked() {
  for (let index = 0; index < radioFamily.length; index += 1) {
    if (radioFamily[index].checked) {
      return radioFamily[index].value;
    }
  }
}

function subjectSelect() {
  const selected = [];
  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked) {
      selected.push(` ${subject[index].value}`);
    }
  }
  return selected;
}

function rated() {
  for (let index = 0; index < radioRate.length; index += 1) {
    if (radioRate[index].checked) {
      return radioRate[index].value;
    }
  }
}

function send(event) {
  event.preventDefault();
  form.style.display = 'none';

  creatData(`Nome: ${inputName.value} ${inputlastName.value}`);
  creatData(`Email: ${inputEmail.value}`);
  creatData(`Casa: ${house.value}`);
  creatData(`Família: ${familyChecked()}`);
  creatData(`Matérias: ${subjectSelect()}`);
  creatData(`Avaliação: ${rated()}`);
  creatData(`Observações: ${textarea.value}`);
}

buttonSubmit.addEventListener('click', send);
