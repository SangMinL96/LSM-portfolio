//
//nav Scroll event
//
const navBtn = document.querySelectorAll(".nav_btn");
const docValue = document.documentElement;
const docHeight = docValue.offsetHeight;

const upBtn = document.querySelector("#upBtn");
console.dir(docValue);
const scrollMove = (navTarget) => {
  const scrollInterVal = setInterval(() => {
    switch (navTarget) {
      case "AboutMe":
        if (docValue.scrollTop <= 1050) {
          return window.scrollBy(0, +55);
        } else {
          return clearInterval(scrollInterVal);
        }
        break;
      case "Projact":
        if (docValue.scrollTop <= 2050) {
          return window.scrollBy(0, +55);
        } else {
          return clearInterval(scrollInterVal);
        }
        break;
      case "Skill":
        if (docValue.scrollTop <= 3550) {
          return window.scrollBy(0, +55);
        } else {
          return clearInterval(scrollInterVal);
        }
        break;
      case "Contact":
        if (docValue.scrollTop <= 4300) {
          return window.scrollBy(0, +50);
        } else {
          return clearInterval(scrollInterVal);
        }
        break;
      case "UP":
        if (docValue.scrollTop >= 1) {
          return window.scrollBy(0, -50);
        } else {
          return clearInterval(scrollInterVal);
        }
        break;
    }
  }, 10);
};
window.addEventListener("scroll", () => {
  const scrollpos = docValue.scrollTop;
  if (scrollpos >= 300) {
    upBtn.style.opacity = "1";
  } else {
    upBtn.style.opacity = "0";
  }
});

const btnNav = () => {
  navBtn.forEach((btn) => {
    btn.addEventListener("click", (ev) => {
      const navTarget = ev.target.innerText;
      scrollMove(navTarget);
    });
  });
};

btnNav();
//
//home_main_username Input event
//
const text = document.querySelector(".home_main-username");
const form = document.querySelector(".username_form");
const input = document.querySelector(".username_input");
const userNameImg = document.querySelector("#userNameImg");
const localValue = "userName";

const createText = (name) => {
  text.innerText = `${name}님 환영합니다.
  하나 하나 직접 작성해 만든 포트폴리오 입니다.
  재미있게 봐주시면 감사하겠습니다!!`;
  input.style.display = "none";
  userNameImg.style.display = "block";
};

const userNameSave = (inputValue) => {
  localStorage.setItem(localValue, inputValue);
};

const createUser = () => {
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const inputValue = input.value;
    createText(inputValue);
    input.style.display = "none";
    userNameImg.style.display = "block";
    userNameSave(inputValue);
  });
};
const userLoad = () => {
  const localUsername = localStorage.getItem(localValue);
  if (localUsername === null) {
    createUser();
  } else {
    createText(localUsername);
  }
};
userLoad();
