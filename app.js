const container = document.querySelector(".container");
const card = document.querySelector(".card");

const burger = document.querySelector(".burger img");
const title = document.querySelector(".title");
const description = document.querySelector(".info h3");
const sides = document.querySelector(".sides");
const drinks = document.querySelector(".drinks");
const purchase = document.querySelector(".purchase button");


// Animation event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Mouse enter animation
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  burger.style.transform = "translateZ(100px)";
  title.style.transform = "translateZ(75px)";
  description.style.transform = "translateZ(30px)";
  sides.style.transform = "translateZ(50px)";
  drinks.style.transform = "translateZ(50px)";
  purchase.style.transform = "translateZ(75px)";
});

// Mouse leave animation
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  burger.style.transform = "translateZ(0px) rotateZ(0deg)";
  title.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  sides.style.transform = "translateZ(0px)";
  drinks.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
