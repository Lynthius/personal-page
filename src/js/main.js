const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".navigation__item");
const socialItems = document.querySelectorAll(".social__item");
const links = document.querySelectorAll("a");
const aboutText = document.querySelector(".about__description");
const contactTxt = document.querySelector(".contact__paragraph");
const contactHead = document.querySelector(".contact__heading");
const langSwitchItems = document.querySelectorAll(".lang-switcher")
const langSwitch = document.querySelector(".lang-switcher");
const activeLang = document.querySelector(".activeLang");

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

function changeNavColor() {
  if (percentage >= 87 && window.screen.width >= 992) {
    navItems.forEach((item) => {
      item.classList.add("navigation__item--dark-mode");
    });
  } else {
    navItems.forEach((item) => {
      item.classList.remove("navigation__item--dark-mode");
    });
  }
}
window.addEventListener("scroll", changeNavColor);

function changeLangColor() {
  if (percentage >= 89 && window.screen.width >= 992) {
    langSwitchItems.forEach((item) => {
      item.classList.add("lang-switcher--dark-mode");
    });
  } else if (percentage <= 88 && window.screen.width >= 992) {
    langSwitchItems.forEach((item) => {
      item.classList.remove("lang-switcher--dark-mode");
    });
  }
}
window.addEventListener("scroll", changeLangColor);

function changeSocialColors() {
  if (percentage >= 64 && window.screen.width >= 992) {
    socialItems.forEach((item) => {
      item.classList.add("social__item--dark-mode");
    });
  } else if (percentage <= 63 && window.screen.width >= 992) {
    socialItems.forEach((item) => {
      item.classList.remove("social__item--dark-mode");
    });
  }
}
window.addEventListener("scroll", changeSocialColors);

function showAboutText() {
  if (percentage > 16) {
    aboutText.style.opacity = 1;
  } else if (percentage < 16) {
    aboutText.style.opacity = 0;
  }
}
window.addEventListener("scroll", showAboutText);

function showPargraphText() {
  if (percentage > 70) {
    contactTxt.style.opacity = 1;
    contactHead.style.opacity = 1;
  }
}
window.addEventListener("scroll", showPargraphText);