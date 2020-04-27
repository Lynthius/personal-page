const aboutText = document.querySelector('.about__text');
const aboutSection = document.querySelector('.about');

function showAboutText() {
    if (percentage > 10) {
        aboutText.style.opacity = 1;
    }
}

window.addEventListener("scroll", getScrollPercent);
window.addEventListener("scroll", showAboutText);
