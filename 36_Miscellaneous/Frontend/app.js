// function PersonMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`Hi, my name is ${this.name}`);
//     },
//   };

//   return person;
// }

// let p1= PersonMaker("shankar", 22);
// let p2= PersonMaker("sneha", 21);

//! Constructors - doesn't return anything & start with capital
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.talk = function () {
//   console.log(`Hi, my name is ${this.name}`);
// };

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  talk() {
    console.log(`Hi, my name is ${this.name}`);
  }
}
let p1 = new Person("adam", 25);
let p2 = new Person("eve", 24);
