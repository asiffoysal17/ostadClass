console.log("Hello JavaScript OOP Details");

const user = {
  name: "Fahim",
  age: 26,
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },
};

user.greet();

//  instance of Object

function Person(name) {
  this.name = name;
}

const p1 = new Person("Ostad");
const p2 = new Person("Fahim");
console.log(p1 instanceof Person);
console.log(p2);

// Class (ES6)

// class Animal {
//   speak() {
//     console.log("Animal speaks !!!");
//   }
// }

// const cat = new Animal();
// const dog = new Animal();
// cat.speak();
// dog.speak();

// Constuctor in Class

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const u1 = new User("Alice");
const u2 = new User("Bob");
u1.greet();
u2.greet();

// Constuctor Parameters

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  showInfo() {
    console.log(`${this.name} costs ${this.price}`);
  }

  showPrice() {
    console.log(this.price);
  }

  discount(discountPrice) {
    console.log(this.price - discountPrice);
  }
}

const pro1 = new Product("Laptop", 1000);
const pro2 = new Product("Phone", 500);

pro1.showInfo();
pro1.showPrice();
pro2.showPrice();
pro2.showInfo();

pro1.discount(100);
pro2.discount(50);

// Changing Class Properties

class student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  updateAge(newAge) {
    this.age = newAge;
  }
}

const s1 = new student("Charlie", 20);
console.log(s1.age);
s1.updateAge(21);
console.log(s1.age);

class mathHelper {
  static PI = 3.1416;

  static square(n) {
    return n * n;
  }
}

console.log(mathHelper.PI);
console.log(mathHelper.square(25));

console.log(Math.PI);
console.log(Math.max(10, 20, 5, 30));

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks.`);
  }
}

const tintin = new Dog("Tintin");
tintin.speak();
tintin.bark();

class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  showBrand() {
    console.log(`This is: ${this.brand}`);
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  info() {
    console.log(`${this.brand} ${this.model}`);
  }
}

const c = new Car("Toyota", "Corolla");
c.info();
c.showBrand();

// Overriding Methods function same and class are not same

class Animal2 {
  speak() {
    console.log("Animal speaks");
  }
}

class Cat extends Animal2 {
  speak() {
    console.log("Meaowww.....");
  }
}

const cat = new Cat();
cat.speak();

// Overloading Method

class Calculator {
  add(a, b, c) {
    if (c === undefined) return a + b;
    return a + b + c;
  }
}

const calc = new Calculator();
console.log(calc.add(10, 20));
console.log(calc.add(10, 20, 30));

// Abstraction

class Base {
  constructor() {
    if (new.target === Base) {
      throw new Error("Cannot instantiate abstract class");
    }
  }
  doTask() {
    throw new Error("Method must be implemented");
  }
}

// const b = new Base();

class Derived extends Base {
  doTask() {
    console.log("Task done");
  }
}

const d = new Derived();
d.doTask();
