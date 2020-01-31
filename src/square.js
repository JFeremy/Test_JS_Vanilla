import $ from "jquery";
import { getRandomColor, getRandomPosition } from "./utils";

class Square {
  constructor(id, width, height) {
    this.id = id;
    this.width = width;
    this.height = height;
    this.top = getRandomPosition(window.innerHeight, this.height);
    this.left = getRandomPosition(window.innerWidth, this.width);
    this.color = getRandomColor();
    this.isShow = true;
  }

  create() {
    $("#root").append("<div id='" + this.id + "'></div>");
    $("#" + this.id).css({
      position: "absolute",
      backgroundColor: this.color,
      width: Math.round(this.width) + "px",
      height: Math.round(this.height) + "px",
      top: Math.round(this.top) + "px",
      left: Math.round(this.left) + "px"
    });
    this.show();
  }

  remove() {
    $("#" + this.id).remove();
  }

  show() {
    $("#" + this.id).css({ display: "block" });
  }

  hidden() {
    $("#" + this.id).css({ display: "none" });
  }

  randomPosition() {
    this.hidden();
    this.top = getRandomPosition(window.innerHeight, this.height);
    this.left = getRandomPosition(window.innerWidth, this.width);
    $("#" + this.id).css({
      top: Math.round(this.top) + "px",
      left: Math.round(this.left) + "px"
    });
    this.show();
  }
}

export { Square };
