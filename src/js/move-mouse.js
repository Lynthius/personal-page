const circle = document.querySelector(".circle");
const anchors = document.querySelectorAll("a");
const btns = document.querySelectorAll("button");

function hideCursorInfo() {
  if (percentage > 20 && window.screen.width >= 992) {
    circle.style.opacity = 0;
    circle.style.zIndex = -1;
  } else if (percentage < 20) {
    circle.style.opacity = 1;
    circle.style.zIndex = 0;
  }
}
window.addEventListener("scroll", hideCursorInfo);

anchors.forEach((anchor) => {
  if (percentage < 20 && window.screen.width >= 992) {
    anchor.onmouseover = function () {
      circle.style.opacity = 0;
      circle.style.zIndex = -1;
    };
    anchor.onmouseleave = function () {
      if (percentage < 20 && window.screen.width >= 992) {
        circle.style.opacity = 1;
        circle.style.zIndex = 0;
      }
    };
  }
});

btns.forEach((btn) => {
  if (percentage < 20 && window.screen.width >= 992) {
    btn.onmouseover = function () {
      circle.style.opacity = 0;
      circle.style.zIndex = -1;
    };
    btn.onmouseleave = function () {
      if (percentage < 20 && window.screen.width >= 992) {
        circle.style.opacity = 1;
        circle.style.zIndex = 0;
      }
    };
  }
});

document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  circle.style.left = x - 105 + "px";
  circle.style.top = y - 105 + "px";
});

let timeout;
window.onload = function () {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    circle.style.opacity = 1;
  }, 500);
};
