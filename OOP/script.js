'use strict';
/*
const Person = function (firstName, birthYear) {
  //   instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // never do this
  //   this.calcAge = function(){
  //     console.log(2037- this.birthYear);
  //   }
};

const manish = new Person('Manish', 2004);
console.log(manish);
Person.prototype.species = 'homo sapiens';
// prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

manish.calcAge();

console.log(manish.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 5, 6, 6, 4, 9, 9, 3];
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

//  //////////////////////////////////
// //////////////////////////////////
// //////// CHALLENGE #1 ///////////
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log((this.speed += 10));
};

Car.prototype.brake = function () {
  console.log((this.speed -= 5));
};

const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

BMW.accelerate();
BMW.brake();

Mercedes.brake();
Mercedes.accelerate();
 
*/

/*

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const manish = new PersonCl('manish', 2004);
console.log(manish);
manish.calcAge();

const account = {
  name: 'manish',
  movement: [200, 300, 400, 500],

  get latest() {
    return this.movement.slice(-1).pop();
  },

  set latest(mov) {
    this.movement.push(mov);
  },
};

console.log(account.latest);

account.latest = 600;

console.log(account.movement);
*/
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const manish = Object.create(PersonProto);
console.log(manish);
manish.name = 'manish';
manish.birthYear = 2004;

manish.calcAge();

const vikas = Object.create(PersonProto);

vikas.init('vikas', 1999);
vikas.calcAge();
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    console.log((this.speed += 10));
  }
  brake() {
    console.log((this.speed -= 5));
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('ford', 120);
console.log(ford.speedUS);
ford.accelerate();

ford.speedUS = 50;
console.log(ford);
