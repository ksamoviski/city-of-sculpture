import { BetterElement } from "./BetterElement.js";
import { SideBar } from "./SideBar.js";

const app = document.getElementById("app");

export const Header = {
  render: function () {
    let header = BetterElement('header', 'header');
    header.innerHTML = `<div class="logoDiv"></div>`
    app.appendChild(header);
    setTimeout(()=> { header.rollout("translateY(0vh)") }, 20);
    setTimeout(()=> { SideBar.open()}, 50);

 
  },
};
