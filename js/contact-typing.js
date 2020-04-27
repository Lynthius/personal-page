const contactTxt = document.querySelector('.contact__paragraph');
const contactHead = document.querySelector('.contact__heading');

function showPargraphText() {
    if (percentage > 70) {
        contactTxt.style.opacity = 1;
        contactHead.style.opacity = 1;
    }
}

window.addEventListener("scroll", getScrollPercent);
window.addEventListener("scroll", showPargraphText);