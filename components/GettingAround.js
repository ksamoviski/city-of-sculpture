import { BetterElement } from "./BetterElement.js";

const app = document.getElementById("app");



export const GettingAround = {
  isOpen: false,
  title: 'Getting Around',

  open: function () {
    let mapPanel = BetterElement('img', 'mapPanel');

    mapPanel.src = './../images/mapWithMarkers.png';

    app.appendChild(mapPanel);
    this.isOpen = true;
  },

  close: function () {
    this.isOpen = false;
  },
};
