// Your code goes here

// Heres 1
const fatBus = document.querySelector(".intro");

fatBus.addEventListener("mouseenter", () => {
  fatBus.style.transform = "scale(1.2)";
  fatBus.style.transition = "transform 0.2s";
});

// Heres 2
fatBus.addEventListener("mouseleave", () => {
  fatBus.style.transform = "scale(1)";
});

// Heres 3

const stopProp = document.querySelector("body");

stopProp.addEventListener("click", event => {
  stopProp.style.backgroundColor = "dodgerblue";
  event.stopPropagation();
});

// Heres 4
const navClrClk = document.querySelector("header");

navClrClk.addEventListener("click", () => {
  navClrClk.style.backgroundColor = "gold";
});

// Heres 5
window.addEventListener("load", () => {
  alert(
    "Hi im just an annoying onload message! Forget this ever happened and enjoy the rest of the site."
  );
});

// Heres 6
const footerB = document.querySelector("footer");

footerB.addEventListener("wheel", () => {
  footerB.style.backgroundColor = "silver";
});

// Heres 7
const stopLink = document.querySelector("nav");

stopLink.addEventListener("click", el => {
  el.preventDefault();
  console.log("haha");
});

// Heres 8
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    link.style.color = "red";
  });
});

// Heres 9
const scrollEvent = document.querySelector("body");

window.addEventListener("scroll", () => {
  scrollEvent.style.backgroundColor = "red";
});

// Heres 10

const flipThisBtn = document.querySelectorAll(".btn");

flipThisBtn.addEventListener("dblclick", event => {
  flipThisBtn.style.transform = "rotate(-180deg)";
});
