import $ from "jquery";

const getRandomPosition = (div, size) => Math.random() * Math.round(div - size);

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export { getRandomPosition, getRandomColor };
