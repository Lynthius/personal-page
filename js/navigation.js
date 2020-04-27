const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".navigation__item");
const socialItems = document.querySelectorAll(".social__item");
const links = document.querySelectorAll('a');

// Hamburger menu handler and social links in mobile version
function handleClick() {
  hamburger.classList.toggle("hamburger--active");
  hamburger.setAttribute("aria-expanded", hamburger.classList.contains("hamburger--active"));
  nav.classList.toggle("navigation--active");

  if (window.screen.width < 992) {
    socialItems.forEach((item) => {
      item.classList.toggle("social__item--dark-mode-mobile");
    });
  };
};

function closeMenu() {
  hamburger.classList.toggle("hamburger--active");
  hamburger.setAttribute("aria-expanded", hamburger.classList.contains("hamburger--active"));
  nav.classList.toggle("navigation--active");

  if (window.screen.width < 992) {
    socialItems.forEach((item) => {
      item.classList.toggle("social__item--dark-mode-mobile");
    });
  };
}

// Percent of scrolled window for if statement in the next function
var percentage = 0;

function getScrollPercent() {
  const h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  percentage = Math.round(((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100);
};

// Change navigation links and social links color
function changeNavColor() {
  if (percentage >= 87 && window.screen.width >= 992) {
    navItems.forEach((item) => {
      item.classList.remove("navigation__item");
      item.classList.add("navigation__item--dark-mode");
    });
  } else {
    navItems.forEach((item) => {
      item.classList.remove("navigation__item--dark-mode");
      item.classList.add("navigation__item");
    });
  };
};

function changeSocialColors() {
  if (percentage >= 66 && window.screen.width >= 992) {
    socialItems.forEach((item) => {
      item.classList.remove("social__item");
      item.classList.add("social__item--dark-mode");
      item.style.display = "inline-block";
    });
  } else if (percentage <= 66 && window.screen.width >= 992) {
    socialItems.forEach((item) => {
      item.classList.remove("social__item--dark-mode");
      item.classList.add("social__item");
      item.style.display = "inline-block";
    });
  };
};

hamburger.addEventListener("click", handleClick);

window.addEventListener("scroll", changeNavColor);
window.addEventListener("scroll", changeSocialColors);
window.addEventListener("scroll", getScrollPercent);

links.forEach(link => link.addEventListener('click', closeMenu));