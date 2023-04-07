class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + ' makes a noise';
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    return this.name + ' says meow!';
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    return this.name + ' says woof!';
  }
}

class Parrot extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    return "It's me! " + this.name + ", the parrot!";
  }
}

describe('Animal', function () {
  describe('Cat', function () {
    let cat;
    beforeEach(function () {
      cat = new Cat('Fluffy');
    });

    it('has a class of Cat', function () {
      expect(cat.constructor).toEqual(Cat);
    });

    it("cat.speak() returns 'Fluffy says meow!'", function () {
      expect(cat.speak()).toEqual('Fluffy says meow!');
    });
  });

  describe('Dog', function () {
    let dog;
    beforeEach(function () {
      dog = new Dog('Buddy');
    });

    it('has a class of Dog', function () {
      expect(dog.constructor).toEqual(Dog);
    });

    it("dog.speak() returns 'Buddy says woof!'", function () {
      expect(dog.speak()).toEqual('Buddy says woof!');
    });
  });

  describe('Parrot', function () {
    let parrot;
    beforeEach(function () {
      parrot = new Parrot('Polly');
    });

    it('has a class of Parrot', function () {
      expect(parrot.constructor).toEqual(Parrot);
    });

    it("parrot.speak() returns 'It\\'s me! Polly, the parrot!'", function () {
      expect(parrot.speak()).toEqual("It's me! Polly, the parrot!");
    });
  });

 describe('Bird', function() {
  let bird;
  let bird2;

  beforeEach(function() {
    bird = new Bird('Pablo', 'parrot', 'tweet!');
    bird2 = new Bird('Mable', 'parrot', 'squawk');
  });

  it('has a class of Bird', function() {
    assert.instanceOf(bird, Bird);
  });

  it("bird.speak() returns 'It's me! [name], the parrot!'", function() {
    assert.strictEqual(bird.speak(), "It's me! Pablo, the parrot!");
  });

  it("bird2.speak() returns 'Squawk!'", function() {
    assert.strictEqual(bird2.speak(), 'Mable says squawk!');
  });
});
