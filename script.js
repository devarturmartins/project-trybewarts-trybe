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