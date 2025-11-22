const fs = require("fs");

// ## Reading file
// synchonous
const data = fs.readFileSync("file.txt", "utf8"); // Blocking
console.log(data);
console.log("This logs file is read.");

// Asynchronous
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("this logs first.");

//  ## writing file

// asynchronous

fs.writeFile("output.txt", "Hello node.js", (err) => {
  if (err) throw err;
  console.log("File written successfully");
});

console.log("This logs first");

//  scynchonous

fs.writeFileSync("output-syn.txt", "hello sync node.js");

// ## Appending file

// asyn

// fs.appendFile("output.txt" , \n"Hello Ostad", (err) => {
//  if (err) throw err;
// console.log("Content appended");
// })

// sync

fs.appendFileSync("output.txt", "\n I am learning node.js");

// ## Deleting file

fs.unlink("output-syn.txt", (err) => {
  if (err) throw err;
  console.log("File deleted");
});

// fs.unlinksync("output-syn.txt", (err) => {
//   if (err) throw err;
//   console.log("File deleted");
// });

//  ## Renaming file

fs.rename("file.txt", "ostad-file.txt", (err) => {
  if (err) throw err;
  console.log("File renamed");
});

// ## checking file exists

fs.access("ostad-file.txt", fs.constants.F_OK, (err) => {
  if (err) {
    console.log("File does not exist");
  } else {
    console.log("File exists");
  }
});
