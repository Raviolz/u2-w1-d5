const navBar = document.querySelector("nav");
const navButton = document.querySelector("nav button");

const tresholdDesktop = 400;
const tresholdTablet = 400; //vabbeh alla fine uguale visto uguale lo lascio come ragionamento in caso

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

document.addEventListener("DOMContentLoaded", function () {
  const bookmarkLinks = document.querySelectorAll(".bookmark-link");

  bookmarkLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      this.classList.toggle("saved-icon");
    });
  });
});
