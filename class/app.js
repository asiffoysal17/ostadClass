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
info.style.color = "blue";
info.style.fontSize = "30px";

const para = document.getElementById("para");
para.classList.add("highlight");
para.classList.remove("highlight");
para.remove();

const container = document.getElementById("container");
const headingg = document.createElement("h2");
headingg.innerText = "Welcome to dom Creation!";

const paragraphh = document.createElement("p");
paragraphh.innerText = "This is a paragraph added using JavaScript!";
paragraphh.classList.add("highlight");

container.appendChild(headingg);
container.appendChild(paragraphh);

// javascript event

const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

// btn.addEventListener("click", ()=> {
//   msg.innerText = "Button was Clicked!";
// });

const handleClick = () => {
  msg.innerText = "Button was Clicked!";
};

btn.addEventListener("click", handleClick);

const input = document.getElementById("input");

input.addEventListener("keyup", () => {
  msg.innerHTML = `Hello, ${input.value}`;
  console.log(input.value);
});

const text = document.getElementById("text");
text.onmouseover = function () {
  text.style.color = "blue";
  text.innerText = "Mouse is over me!";
};

text.onmouseout = function () {
  text.style.color = "black";
  text.innerText = "Hover Over Me";
};

const form = document.getElementById("userform");
const out = document.getElementById("output");

// form.addEventListener("submit", (e) => {
// e.preventDefault();
// const name = document.getElementById("name").value;
// const email = document.getElementById("email").value;
// out.innerText = `Name: ${name}, Email: ${email} `;
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;

  const li = document.createElement("li");
  li.innerText = name;

  userlist.appendChild(li);
  form.reset();
});
