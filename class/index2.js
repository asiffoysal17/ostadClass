console.log("Heello my name is Asif");

// #Object
let persone = {
  fristname: "Asif",
  lastname: "Foysal",
  age: 19,
  isDevloper: true,
};

// add
console.log(persone["lastname"]);
console.log(persone.age);
console.log(persone);

persone.counrty = "Bangladesh";
console.log(persone);

// modify
persone.age = 20;
console.log(persone);

let personekeys = Object.keys(persone);
console.log(personekeys);

let personevalues = Object.values(persone);
console.log(personevalues);

let personeentrise = Object.entries(persone);
console.log(personeentrise);

//  #JSON

// let jsonString = JSON.stringify(persone);
// console.log(jsonString);

let student = {
  name: "Tanvir",
  age: 20,
  city: "Dhaka",
};

let jsonString = JSON.stringify(student);
console.log(jsonString);

let jsonData = '{"name":"Tanbir","age":20,"city":"Dhaka"}';
let obj = JSON.parse(jsonData);
console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.city);

// #Array

let fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Pineapple",
  "Watermelon",
  "Papaya",
  "Mango",
];
console.log(fruits);
// console.log(fruits[1]);

fruits.push("Mango");
// console.log(fruits);

fruits.pop();
// console.log(fruits);

fruits.unshift("Grapes");
// console.log(fruits);

fruits.shift();
// console.log(fruits);

// fruits[1] = "kiwi";
// console.log(fruits);

console.log(fruits.indexOf("Banana"));

console.log(fruits.indexOf("Grapes"));

console.log(fruits.length);

console.log(fruits.slice(1, 4));
console.log(fruits.slice(3, 4));

fruits.sort();
console.log(fruits);

let numbers = [5, 3, 6, 1, 4, 7, 2];
numbers.sort();
console.log(numbers);

fruits.forEach((fruit) => console.log(fruit));

// ##String

let massage = "Hello my name is Asif Foysal. I am a web developer.";
console.log(massage);

console.log(massage.toUpperCase());
console.log(massage.toLowerCase());
console.log(massage.slice(7, 14));
console.log(massage.substring(7, 14));
console.log(massage.indexOf("Asif"));
console.log(massage.includes("web"));
console.log(massage.replace("Asif", "Tanvir"));

let newMessage = massage.replace("web developer", "frontend developer");
console.log(newMessage);

let word = massage.split(" ");
console.log(word[4]);

let strNumbs = "1,2,3,4,5,6,7,8,9";
let numArr = strNumbs.split(",");
console.log(numArr);

let userInput = "      Hello World       ";
console.log(userInput);
console.log(userInput.trim());
console.log(userInput.length);

//  ##JavaScript Date

let currentDate = new Date();
console.log(currentDate);

const myBrithday = new Date(2006, 1, 27);
console.log(myBrithday);

let now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getTime());

console.log(now.toDateString());
console.log(now.toISOString());
console.log(now.toLocaleString());

now.setFullYear(2027);
now.setMonth(0);
now.setDate(1);

console.log(now);

// ##Math

console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-10));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.round(4.8));
console.log(Math.round(4.4));
console.log(Math.round(4.5));
console.log(Math.max(10, 20, 30, 40, 50));
console.log(Math.min(10, 20, 30, 40, 50));
console.log(Math.random());

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

console.log(Math.pow(2, 3));
console.log(Math.sqrt(16));

// ##Number

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN); //Not a Number
console.log(Number("17"));
console.log(parseInt("17"));
console.log(parseFloat("17.8"));
console.log(isNaN("Hello"));
console.log(isNaN(17));
console.log(isNaN(17.8));
