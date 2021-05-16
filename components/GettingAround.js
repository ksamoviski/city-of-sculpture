import { BetterElement } from "./BetterElement.js";

const app = document.getElementById("app");

let mapPanel = BetterElement("img", "mapPanel");

export const GettingAround = {
  isOpen: false,
  title: "Getting Around",

  open: function () {
    mapPanel.style.opacity = "1";
    mapPanel.src = "./../images/mapWithMarkers.png";
    app.appendChild(mapPanel);

    setTimeout(() => {
      let sideBar = document.getElementById("sideBar");
      sideBar.rollout("translateX(0vw)");
      mapPanel.classList.add("open");
    }, 800);

    this.isOpen = true;
  },

  close: function () {
    if (this.isOpen) {
      mapPanel.style.opacity = "0";
      mapPanel.classList.remove("open");
      let sideBar = document.getElementById("sideBar");
      sideBar.style.transform = "translateX(14vw)";
    }

    this.isOpen = false;
  },
};
