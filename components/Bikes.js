import { BetterElement } from "./BetterElement.js";
import { PennyFarthing } from './PennyFarthing.js';

let app = document.getElementById("app");

export const Bikes = {
  isOpen: false,
  title: "Sculptural Bike Racks",

  open: function () {
    let bikeParts = {
      bigWheel: BetterElement("img", "pennyFarthing"),
      pennyFrame: BetterElement("img", "pennyFarthing"),
      smallWheel: BetterElement("img", "pennyFarthing"),
    };

    bikeParts.bigWheel.src = "../images/bigWheel.png";
    bikeParts.pennyFrame.src = "../images/pennyFrame.png";
    bikeParts.smallWheel.src = "../images/smallWheel.png";

    bikeParts.bigWheel.id = "bigWheel";
    bikeParts.pennyFrame.id = "pennyFrame";
    bikeParts.smallWheel.id = "smallWheel";

    for (let part in bikeParts) {
      app.appendChild(bikeParts[part]);
    }

    PennyFarthing(0, 0, 0);

    this.isOpen = true;
  },

  close: function () {
    this.isOpen = false;
  },
};
