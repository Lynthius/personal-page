const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + 30 + "px";
  cursor.style.top = y + 30 + "px";
});

let timeout;
window.onload = function () {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    cursor.style.opacity = 1;
    setTimeout(function () {
      cursor.style.opacity = 0;
    }, 10000);
  }, 500);
};

function hideLangSwitch() {
  if (percentage > 20) {
    cursor.style.opacity = 0;
  }
}
window.addEventListener("scroll", hideLangSwitch);
