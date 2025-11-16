//! inheritance in Js
class Mammal {// base class | parent class
  constructor(name) {
    this.name = name;
    this.type = "warm-blooded";
  }

  eat() {
    console.log(" I am eating");
  }
}

class Dog extends Mammal { // child class
  constructor(name) {
    super(name);
  }

  bark() {
    console.log("woof...");
  }

  //override: child will run
  eat() {
    console.log(" Dog is eating");
  }
}

class Cat extends Mammal { //child class
    constructor(name) {
      super(name);
    }
  
    meow() {
      console.log("meow...");
    }
  }


//   let dog1 = new Dog("tuffie");
