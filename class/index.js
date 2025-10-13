console.log("hello world");
// variable

// let y = 20;
// const z = 30;

// y = 40;
// console.log(y);

// primitive type
// let name = "John Doe"; //string
// let age = 25; //number
// let isActive = true; //boolean
// let x; //undefined
// let y = null; //null -> Empty value
// let num = 10.5; //Float/Double

// console.log(name, age, isActive, x, y);

// Non - primitive
// let colors = ["red", "green", "blue"];

// Operator

// Arithmetic operator
let a = 10,
  b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Assignment operator
// let q = 10;
// q += 3; // q = q + 5
// q -= 3; // q = q - 5
// q *= 3; // q = q * 5
// q /= 3; // q = q / 5
// q %= 3; // q = q % 5
// q **= 3; // q = q ** 5
// console.log(q);

// Comparison operator ----> its return boolean
// let r = 5;
// let t = 5;
// console.log(r == t); // Equal
// console.log("5" === "5"); //strict equal
// console.log(5 != 4); // Not equal
// console.log(5 > 4); // greater than
// console.log(5 < 4); // less than

// Logical operator
let w = true;
let e = false;
console.log(w && e); // and
console.log(w || e); // or
console.log(!w); // not

//  ## if-else

const score = 80;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

console.log("End");

// ## switch-case

let v = "0";
let test;
switch (v) {
  case "0":
    test = "Off";
    break;
  case "1":
    test = "On";
    break;
  default:
    test = "No value Found";
}

console.log(test);

// # Loop
// for loop
for (let i = 0; i <= 5; i++) {
  // i++ => i = i + 1
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(`9 * ${i} = ${9 * i}`);
}

// while loop

let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

let j = 1;
while (j <= 10) {
  console.log(`9 * ${j} = ${9 * j}`);
  j++;
}

// do-while loop

let k = 0;
do {
  console.log(k);
  k++;
} while (k <= 5);

let l = 1;
do {
  console.log(`9 * ${l} = ${9 * l}`);
  l++;
} while (l <= 10);

let colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(index, colors[index]);
}

var o = 30;
function add(a, b) {
  var sum = a + b;
  return sum;
}

add(5, 8);
