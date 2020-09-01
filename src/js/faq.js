const faqBtns = document.querySelectorAll(".accordion__link");
const faqAnsws = document.querySelectorAll(".answer");
const unrollIcons = document.querySelectorAll(".add");
const rollIcons = document.querySelectorAll(".remove");

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
      answer.style.maxHeight = "24rem";
      add.style.display = "none";
      remove.style.display = "block";
    }
  });
}

faqBtns.forEach((btn) => btn.addEventListener("click", revealContent));
