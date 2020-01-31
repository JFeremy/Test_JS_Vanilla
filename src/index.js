import "./styles.css";
import $ from "jquery";
import { Square } from "./square";

let crazymode = false;
let crazy = null;
let lastId = 0;
const squares = [];

const init = () => {
  const squarePrincipal = new Square(
    lastId,
    window.innerWidth / 2,
    window.innerHeight / 2
  );
  squarePrincipal.create();
  squares.push(squarePrincipal);
};

const onSquareClick = id => {
  const square = squares.find(element => element.id === id);
  square.remove();
  for (let i = 0; i < 4; i++) {
    lastId++;
    const newSquare = new Square(lastId, square.width / 4, square.height / 4);
    newSquare.create();
    squares.push(newSquare);
  }
};

const handleCrazyMode = () => {
  crazymode = !crazymode;
  if (crazymode) {
    $("#mode").html("Crazy Mode");
    crazy = setInterval(() => {
      squares.forEach(square => {
        square.randomPosition();
      });
    }, 2000);
  } else {
    $("#mode").html("Classic Mode");
    clearInterval(crazy);
  }
};

$(document).dblclick(function() {
  handleCrazyMode();
});

$(document).ready(() => {
  init();
  $(document).on("click", "div", event => {
    onSquareClick(Number.parseInt(event.target.id, 10));
  });
});
