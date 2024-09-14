'use strict';

let scores, currentScore, activePlayer;

scores = [0, 0];
currentScore = 0;
activePlayer = 0;

let playing = true;

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// rolling dice functionality

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1.generate a randpm dice role
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2.display the dice
    // diceEl.style.display = 'block';
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // check for rolled 1: if true switch for next player
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    console.log(scores[0]);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
  // activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
});
