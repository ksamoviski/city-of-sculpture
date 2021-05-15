import { BetterElement } from "./BetterElement.js";
import { PennyFarthing } from "./PennyFarthing.js";

let app = document.getElementById("app");

export const Bikes = {
  isOpen: false,
  title: "Sculptural Bike Racks",

  open: function () {

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
