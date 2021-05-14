import { BetterElement } from "./BetterElement.js";
import { SideBar } from "./SideBar.js";

const app = document.getElementById("app");
let screenHeight = window.innerHeight;
console.log(screenHeight);

export const HeaderFooter = {
  render: function () {
    let header = BetterElement("header", "header");
    let footer = BetterElement('footer', 'footer');

    screenHeight < 1000
      ? (header.style.height = screenHeight / 6 + "px")
      : (header.style.height = screenHeight / 5 + "px");

    header.innerHTML = `<div class="logoDiv"></div>`;
    app.appendChild(header);
    app.appendChild(footer);
    setTimeout(() => {
      header.rollout("translateY(0vh)");
    }, 20);
    setTimeout(() => {
      SideBar.open();
    }, 50);
  },
};
