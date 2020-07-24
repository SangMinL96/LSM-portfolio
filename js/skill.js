const items = document.querySelectorAll(".item_name");

const itemNumber = () => {
  const Num = Math.floor(Math.random() * items.length);
  return Num;
};

const itemWidth = () => {
  const x = Math.floor(Math.random() * (350 - 50)) + 50;
  return x;
};
const itemHeight = () => {
  const y = Math.floor(Math.random() * (380 - 50)) + 50;
  return y;
};

function onMove() {
  const itemRandom = itemNumber();
  items[itemRandom].style.left = `${itemWidth()}px`;
  items[itemRandom].style.top = `${itemHeight()}px`;
}
setInterval(onMove, 80);
