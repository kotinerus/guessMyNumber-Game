'use strict';

function updateValue() {
  numer--;
  document.querySelector('.score').textContent = numer;
}

function updateHighscore() {
  if (Number(document.querySelector('.highscore').textContent) === 0) {
    document.querySelector('.highscore').textContent = numer;
  } else {
    if (Number(document.querySelector('.highscore').textContent) < numer) {
      document.querySelector('.highscore').textContent = numer;
    }
  }
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

let secretNumber = Math.trunc(Math.random() * 20);
let numer = 20;

document.querySelector('.again').addEventListener('click', function () {
  numer = 20;
  document.querySelector('.score').textContent = numer;
  secretNumber = Math.trunc(Math.random() * 20);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!document.querySelector('.guess').value) {
    displayMessage('🛑 Nie podano znaku');
  } else if (guess === secretNumber) {
    //PLAYER WINS
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('✔ Trafiłeś');
    document.querySelector('body').style.backgroundColor = '#32a854';
    document.querySelector('.number').style.width = '30rem';
    updateHighscore();
    //
  } else if (guess > secretNumber) {
    if (numer > 1) {
      displayMessage(' Za wysoko!');
      updateValue();
    } else {
      displayMessage('❌Przegrałeś');
      updateValue();
    }
  } else if (guess < secretNumber) {
    if (numer > 1) {
      displayMessage(' Za nisko!');
      updateValue();
    } else {
      //PLAYER LOST
      displayMessage('❌Przegrałeś');
      updateValue();
    }
  }
});
