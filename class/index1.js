console.log("hello world");

function greet() {
  console.log("Hello Asif");
}

greet();

function greetUser(name) {
  console.log("Hello" + name);
}

greetUser(" Asif");
greetUser(" Foysal");

function add(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
  return sum;
}

add(400, 500);
add(234, 342);
add(678, 853);

function square(number) {
  return number * number;
}

const result = square(9);
const finalResult = add(result, 25);
console.log(finalResult);

// named function
function calculateDiscount(price, percentage) {
  return price - price * (percentage / 100);
}

console.log(calculateDiscount(1000, 10));
console.log(calculateDiscount(5000, 10));
console.log(calculateDiscount(8000, 15));

// anonymous function
const multiply = function (a, b) {
  return a * b;
};

// console.log(multiply(6, 9));

setTimeout(function () {
  console.log("This run after 2 seconds");
}, 2000);

// arrow function
const sum = (x, y) => x + y;
console.log(sum(300, 400));

// IIFE(Immediately Invoked Function Expression)
(function () {
  console.log("This run immediately");
})();

// Generator functions

/* function* generatorNumber() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
} */

// const gen = generatorNumber();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

function* idGenarator() {
  let id = 1;

  while (true) {
    yield id++;
  }
}

const gen = idGenarator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// Recursive functions

function countdown(n) {
  if (n <= 0) return;
  console.log(n);
  countdown(n - 1);
}

countdown(20);

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(10));

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));
