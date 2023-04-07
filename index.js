class Cat {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  class Bird {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      return `${this.name} says tweet!`;
    }
  }
  
  module.exports = { Cat, Dog, Bird };
  