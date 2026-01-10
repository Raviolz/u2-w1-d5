const navBar = document.querySelector("nav");
const navButton = document.querySelector("nav button");

const tresholdDesktop = 400;
const tresholdTablet = 400;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  let activeTreshold;

  if (window.innerWidth <= 1200) {
    activeTreshold = tresholdTablet;
  } else {
    activeTreshold = tresholdDesktop;
  }

  if (scrollPosition > activeTreshold) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});

console.log("funziona");
