import { BetterElement } from "./BetterElement.js";

const app = document.getElementById("app");

let backgroundImage = BetterElement("div", "aboutImage");

export const HomeBackground = {
  isOpen: false,

  render: function () {
    app.appendChild(backgroundImage);
    this.isOpen = true;
  },

  close: function () {
    backgroundImage.style.opacity = "0";
    this.isOpen = false;
  },
};
