const items = document.querySelectorAll(".item_name");
const itemContainer = document.querySelectorAll(".skill_column");

const itemNumber = () => {
  const Num = Math.floor(Math.random() * items.length);
  return Num;
};

const itemWidth = () => {
  const x = Math.floor(Math.random() * (330 - 40)) + 40;
  return x;
};
const itemHeight = () => {
  const y = Math.floor(Math.random() * (350 - 40)) + 40;
  return y;
};

const onMove = () => {
  const itemRandom = itemNumber();
  items[itemRandom].style.left = `${itemWidth()}px`;
  items[itemRandom].style.top = `${itemHeight()}px`;
};
const init = () => {
  setInterval(onMove, 60);
};
init();
