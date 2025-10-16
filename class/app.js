const heading = document.getElementById("title");
const paragraph = document.getElementsByClassName("text");
console.log(heading.innerText);
console.log(paragraph);
console.log(typeof paragraph);
console.log(paragraph[0].innerHTML);
console.log(paragraph[1].innerHTML);
const fristCard = document.querySelector(".card");
const allCards = document.querySelectorAll(".card");
console.log(fristCard.innerText);
console.log(allCards);
allCards.forEach((card) => {
  console.log(card.innerHTML);
  card.style.border = "2px solid red";
});

const titlee = document.getElementById("titlee");
titlee.innerText = "HELLO JAVASCRIOT";

const info = document.getElementById("info");
info.innerHTML = "<b> WELCOME TO JAVASCRIPT </b>";
// 58:00
