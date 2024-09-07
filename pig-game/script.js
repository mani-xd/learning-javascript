'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// rolling dice functionality

btnRoll.addEventListener('click', function () {
  // 1.generate a randpm dice role
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2.display the dice
  diceEl.classList.remove('hidden');
  // check for rolled 1: if true switch for next player
});
