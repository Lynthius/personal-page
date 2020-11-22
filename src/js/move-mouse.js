const circle = document.querySelector(".circle");
const anchors = document.querySelectorAll("a");
const btns = document.querySelectorAll("button");

function hideCursorInfo() {
  if (percentage > 20) {
    circle.style.opacity = 0;
  } else if (percentage < 20) {
    circle.style.opacity = 1;
  }
}
window.addEventListener("scroll", hideCursorInfo);

anchors.forEach((anchor) => {
  if (percentage < 20) {
    anchor.onmouseover = function () {
      circle.style.opacity = 0;
    };
    anchor.onmouseleave = function () {
      if (percentage < 20) {
        circle.style.opacity = 1;
      }
    };
  }
});

btns.forEach((btn) => {
  btn.onmouseover = function () {
    circle.style.opacity = 0;
  };
  if (percentage < 20) {
    btn.onmouseleave = function () {
      circle.style.opacity = 1;
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
    setTimeout(function () {
      circle.style.opacity = 0;
    }, 1000000000);
  }, 500);
};
