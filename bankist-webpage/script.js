'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
const allsections = document.querySelectorAll('.section');

console.log(header);
console.log(allsections);

document.getElementById('section--1');
const allbuttons = document.getElementsByTagName('button');
console.log(allbuttons);

const message = document.createElement('div');
message.classList.add('cookie--message');

message.innerHTML = `We use cookies for improved functionality and 
analytics <button class = "btn 
btn--close--cookies">Got it!</button>`;

header.prepend(message);
header.append(message);

document
  .querySelector('.btn--close--cookies')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message);
  });
message.style.backgroundColor = '#37383d';
message.style.color = 'white';
message.style.width = '120%';

console.log(message.style.color);

console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');
// //////////////////////////

const H1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('hello, my name is manish aanjna');
};

H1.addEventListener('mouseenter', alertH1);

setTimeout(() => H1.removeEventListener('mouseenter', alertH1), 5000);
