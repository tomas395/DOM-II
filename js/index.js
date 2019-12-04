// Your code goes here

// Heres 1
const fatBus = document.querySelector(".intro");
fatBus.addEventListener("mouseenter", event => {
  fatBus.style.transform = "scale(1.2)";
  fatBus.style.transition = "transform 0.2s";
  event.stopPropagation();
});

// Heres 2
fatBus.addEventListener("mouseleave", event => {
  fatBus.style.transform = "scale(1)";
  event.stopPropagation();
});

// Heres 3
const stopProp = document.querySelector("body");
stopProp.addEventListener("click", event => {
  stopProp.style.backgroundColor = "dodgerblue";
  event.stopPropagation();
});

// Heres 4
const navClrClk = document.querySelector("header");
navClrClk.addEventListener("dblclick", event => {
  navClrClk.style.backgroundColor = "gold";
  event.stopPropagation();
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
stopLink.addEventListener("click", element => {
  element.preventDefault();
  console.log("haha");
});

// Heres 8
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(links => {
  links.addEventListener("click", () => {
    links.style.color = "red";
  });
});

// Heres 9
const scrollEvent = document.querySelector("body");
window.addEventListener("scroll", () => {
  scrollEvent.style.backgroundColor = "red";
});

// Heres 10
window.addEventListener("keydown", () => {
  alert("Glad to see some life");
});

    Heres 11
window.addEventListener("keyup", () => {
  alert("Nice!");
});

// Heres 12
const divStopProp = document.querySelector(".text-content");
divStopProp.addEventListener("click", event => {
  divStopProp.style.backgroundColor = "orange";
  event.stopPropagation();
});
