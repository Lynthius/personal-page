const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const social = document.querySelectorAll(".social__item a")

const handleClick = () => {
	hamburger.classList.toggle("hamburger--active");
	hamburger.setAttribute("aria-expanded", hamburger.classList.contains("hamburger--active"));
    nav.classList.toggle("navigation--active");
    // social.classList.toggle("social__link--dark-mode");
    social.forEach(social => {
        social.classList.toggle("social__link--dark-mode")
    })
};

hamburger.addEventListener("click", handleClick);


