console.log("Hello Node.js");

function testScope() {
  let a = 10;
  console.log("Inside func:", a);
}

testScope();

sayHello();
function sayHello() {
  console.log("Hello");
}

// const greet = () => console.log("Greetings!");
// greet();

// Spread Operator

const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5, 6];
console.log(arr);
console.log(arr2);

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj1);
console.log(obj2);

// Rest Operator
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 10, 22, 23, 45));

// Desturcturing

const num = [100, 200, 300, 400, 500];
const [x, y, ...z] = num; // const [x, ,z] = num; == output: 100,300
console.log(x);
console.log(y);
console.log(z);

// Arrow Functions
const square = (n) => {
  return n * n;
};
console.log(square(25));

// Object Methods
const name = "Ostad";
const age = 25;
const person = { name, age };
console.log(person);

const personInfo = { fristName: "Ostad", agee: 25 };
const { fristName, agee } = personInfo;
console.log(fristName, agee);

const car = {
  brand: "Toyota",
  model: "Corolla",
  getInfo() {
    return `${this.brand} ${this.model}`;
  },
};

// console.log(car);
// console.log(car.brand);
// console.log(car.model);
// console.log(car["brand"]);
console.log(car.getInfo());

// Array

const numbers = [5, 10, 15, 20, 25];
for (let num of numbers) {
  console.log(num);
}

// Object
const user = { name: "Asif", age: 30 };
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

let ageee = 30;
const result = ageee >= 18 ? "Adult" : "Minor";
console.log(result);

const users = new Map();
users.set(1, "Asif");
users.set(2, "Ostad");
console.log(users);
console.log(users.get(1));
console.log(users.get(3));
console.log(users.has(2));
console.log(users.has(3));

// users.delete(1); remove item
// console.log(users.has(1)); = false

const entries = [...users];
console.log(entries);

// Set
const numberSet = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log(numberSet);
numberSet.add(6);
console.log(numberSet);
console.log(numberSet.has(3));
console.log(numberSet.has(13));
for (let num of numberSet) {
  console.log(num);
}

const uniqueArray = [...numberSet];
console.log(uniqueArray);
