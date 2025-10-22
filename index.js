console.log("Hello World");

// 1) calculateSum

function calculatesum(a, b) {
  return a + b;
}

console.log(calculatesum(5, 6));

// 2) isEven

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(17));
console.log(isEven(18));

// 3) fildMax

function fildMax(arr) {
  return Math.max(...arr);
}

console.log(fildMax([10, 23, 45, 567, 89, 999, 8987]));

// 4) reverseString

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// 5) filteroddNumbers

function filteroddNumbers(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

console.log(filteroddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 6) sumArray

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 99, 878]));

// 7) sotrArray

function sotrArray(arr) {
  return arr.slice().sort((a, b) => a - b);
}

console.log(sotrArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

// 8) capitalizeFristLetter

function capitalizeFristLetter(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFristLetter("hello"));
