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

class Animal {
  speak() {
    console.log("Animal speaks !!!");
  }
}

const cat = new Animal();
const dog = new Animal();
cat.speak();
dog.speak();

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
