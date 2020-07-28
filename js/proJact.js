//const docValue = document.documentElement;  header.js에서 선언함
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
//
//
// 인사이드 클릭 이벤트
const proJactItems = document.querySelectorAll(".hoverbackcolor");
const inItems = document.getElementsByClassName("item_inside");
const closeIcon = document.querySelectorAll(".item_close");

const slideMove = (value) => {
  inItems[value - 1].style.top = "10%";
  inItems[value - 1].style.opacity = "1";
  inItems[value - 1].style.zIndex = "99";
};

const inside = () => {
  closeIcon.forEach((close) => {
    close.addEventListener("click", (ev) => {
      const closeValue = ev.currentTarget;
      console.dir(closeValue);
      closeValue.offsetParent.style.top = "-72%";
      closeValue.offsetParent.style.opacity = "0";
      closeValue.offsetParent.style.zIndex = "-1";
    });
  });
};

const onSlide = () => {
  proJactItems.forEach((item) => {
    item.addEventListener("click", (ev) => {
      const itemValue = ev.target.id;
      console.log(itemValue);
      slideMove(itemValue);
    });
  });
};

onSlide();
inside();
