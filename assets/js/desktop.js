const navBar = document.querySelector("nav");
const navButton = document.querySelector("nav button");

const treshold = 400;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > treshold) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});

console.log("funziona");
