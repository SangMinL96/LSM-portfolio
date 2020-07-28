// const docValue = document.documentElement;  header.js에서 선언함
const leftMove = document.querySelectorAll(".leftMoveItem");
const centerMove = document.querySelectorAll(".centerMoveItem");
const rightMove = document.querySelectorAll(".rightMoveItem");

window.addEventListener("scroll", () => {
  const scrollpos = docValue.scrollTop;
  if (scrollpos >= 1400) {
    leftMove[0].classList.add("left");
    centerMove[0].classList.add("center");
    rightMove[0].classList.add("right");
  }
  if (scrollpos >= 1700) {
    leftMove[1].classList.add("left");
    centerMove[1].classList.add("center");
    rightMove[1].classList.add("right");
  }
  if (scrollpos >= 2100) {
    leftMove[2].classList.add("left");
    centerMove[2].classList.add("center");
    rightMove[2].classList.add("right");
  }
});
