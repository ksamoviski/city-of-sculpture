import { BetterElement } from "./BetterElement.js";
import { PennyFarthing } from "./PennyFarthing.js";

let app = document.getElementById("app");

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

export const Bikes = {
  isOpen: false,
  title: "Sculptural Bike Racks",

  open: function () {
    for (let part in bikeParts) {
      app.appendChild(bikeParts[part]);
    }

    PennyFarthing(0, 0, 0);

    this.isOpen = true;
  },

  close: function () {
    let startingOpacity = 0;

    function shutterBike(startingOpacity) {
      if (startingOpacity < 100) {
        setTimeout(() => {
          for (let part in bikeParts) {
            bikeParts[part].style.opacity =
              1 - (startingOpacity * 0.01).toString();
          }
          startingOpacity++;
          shutterBike(startingOpacity);
        }, 30);
      }
    }
    shutterBike(startingOpacity);
    setTimeout(()=> {
      for (let part in bikeParts) {
        bikeParts[part].parentElement.removeChild(bikeParts[part]);
      }
    }, 600);
    
    this.isOpen = false;
  },
};
