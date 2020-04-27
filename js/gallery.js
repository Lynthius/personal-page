const gallery = document.querySelector('.gallery');
// const carouselTrack = document.querySelector('.carousel__track');
const sliderBtnRight = document.querySelector('.gallery__button--right');
const sliderBtnLeft = document.querySelector('.gallery__button--left');
const sliderCounter = document.querySelector('.gallery__current-photo');
const slider = document.querySelector('.carousel__track');
const image = document.querySelector('.carousel__slide');

document.querySelector('img').setAttribute('draggable', false);

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

let i = 1;

const nextSlide = debounce(function () {
  if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth)) {
    slider.scrollLeft = 0;
    i = 1;
    sliderCounter.textContent = '0' + i;
    return;
  }

  i++;
  slider.scrollLeft += (image.offsetWidth + 10);
  if (i <= 9) {
    sliderCounter.textContent = '0' + i;
  } else if (i > 9 && i < 21) {
    sliderCounter.textContent = i;
  } else {
    // i = 1;
    // sliderCounter.textContent = '0' + i;
  }
}, 400);

const previousSlide = debounce(function () {
  if (slider.scrollLeft === 0) {
    return;
  }
  i--;
  slider.scrollLeft -= (image.offsetWidth + 10);
  if (i <= 9) {
    sliderCounter.textContent = '0' + i;
  } else if (i > 9 && i < 21) {
    sliderCounter.textContent = i;
  } else {
    i = 1;
    sliderCounter.textContent = '0' + i;
  }
}, 400)

// --------------------------
let touchstartX = 0;
let touchendX = 0;

slider.addEventListener('touchstart', function (e) {
  touchstartX = e.changedTouches[0].screenX;
}, false);

slider.addEventListener('touchend', function (e) {
  touchendX = e.changedTouches[0].screenX;
  handleSwipe();
}, false);

function handleSwipe() {
  if (touchendX > touchstartX) {
    previousSlide()
  } else if (touchendX < touchstartX) {
    nextSlide()
  }
}
// ---------------------------

sliderBtnRight.addEventListener('click', nextSlide);
sliderBtnLeft.addEventListener('click', previousSlide);

window.addEventListener('keydown', function (e) {
  if (e.keyCode === 39) {
    nextSlide()
  } else if (e.keyCode === 37) {
    previousSlide();
  }
});