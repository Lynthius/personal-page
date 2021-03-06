const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".navigation__item");
const socialItems = document.querySelectorAll(".social__item");
const links = document.querySelectorAll("a");
const aboutText = document.querySelector(".about__text");
const contactTxt = document.querySelector(".contact__paragraph");
const contactHead = document.querySelector(".contact__heading");
const langSwitchItems = document.querySelectorAll(".lang-switcher");
const langSwitch = document.querySelector(".lang-switcher");

const faqBtns = document.querySelectorAll(".accordion__link");
const faqAnsws = document.querySelectorAll(".answer");
const unrollIcons = document.querySelectorAll(".add");
const rollIcons = document.querySelectorAll(".remove");

// Percent of scrolled window for if statement in the next function
var percentage = 0;

function getScrollPercent() {
  const h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  percentage = Math.round(
    ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
  );
}
window.addEventListener("scroll", getScrollPercent);
window.addEventListener("onload", getScrollPercent);

function hideLangSwitch() {
  if (percentage > 3 && window.screen.width < 992) {
    langSwitch.style.opacity = 0;
  } else {
    langSwitch.style.opacity = 1;
  }
}
window.addEventListener("scroll", hideLangSwitch);

// Hamburger menu handler and social links in mobile version
function handleClick() {
  hamburger.classList.toggle("hamburger--active");
  hamburger.setAttribute(
    "aria-expanded",
    hamburger.classList.contains("hamburger--active")
  );
  nav.classList.toggle("navigation--active");

  // if (window.screen.width < 992) {
  socialItems.forEach((item) => {
    item.classList.toggle("social__item--dark-mode-mobile");
  });
  // };
}
hamburger.addEventListener("click", handleClick);

function closeMenu() {
  hamburger.classList.toggle("hamburger--active");
  hamburger.setAttribute(
    "aria-expanded",
    hamburger.classList.contains("hamburger--active")
  );
  nav.classList.toggle("navigation--active");

  if (window.screen.width < 992) {
    socialItems.forEach((item) => {
      item.classList.toggle("social__item--dark-mode-mobile");
    });
  }
}
links.forEach((link) => link.addEventListener("click", closeMenu));

function changeSocialColors() {
  if (percentage >= 84 && window.screen.width >= 992) {
    socialItems.forEach((item) => {
      item.classList.add("social__item--dark-mode");
    });
  } else if (percentage <= 83 && window.screen.width >= 992) {
    socialItems.forEach((item) => {
      item.classList.remove("social__item--dark-mode");
    });
  }
}
window.addEventListener("scroll", changeSocialColors);

function changeBtnAriaState(e) {
  const btn = e.target;
  let ariaState = btn.getAttribute("aria-expanded");
  faqBtns.forEach((btn) => btn.setAttribute("aria-expanded", "false"));

  if (ariaState === "false") {
    ariaState = "true";
  } else {
    ariaState = "false";
  }
  btn.setAttribute("aria-expanded", ariaState);
  console.log(ariaState);
}

faqBtns.forEach((btn) => btn.addEventListener("click", changeBtnAriaState));

function revealContent(e) {
  const btn = e.target;
  const add = e.target.querySelector(".add");
  const remove = e.target.querySelector(".remove");
  let itemId = e.target.getAttribute("aria-controls");

  unrollIcons.forEach((icon) => (icon.style.display = "block"));
  rollIcons.forEach((icon) => (icon.style.display = "none"));

  faqAnsws.forEach((answer) => {
    answer.style.maxHeight = "0";
    if (answer.id == itemId && btn.getAttribute("aria-expanded") === "true") {
      answer.style.maxHeight = "42rem";
      add.style.display = "none";
      remove.style.display = "block";
      answer.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}

faqBtns.forEach((btn) => btn.addEventListener("click", revealContent));
