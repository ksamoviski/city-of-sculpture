import { BetterElement } from "./BetterElement.js";
import { PennyFarthing } from "./PennyFarthing.js";

let app = document.getElementById("app");

const BIG = "big";
const H = "horizontal";
const V = "vertical";
const HUGE = "huge";

let bikeDivPanel = BetterElement("div", "bikeDivPanel");

export const Bikes = {
  isOpen: false,
  title: "Sculptural Bike Racks",

  attachImages: function () {
    for (let bikeRackImage in listOfRacks) {
      let tileDiv = BetterElement("div", "tileDiv", listOfRacks[bikeRackImage]);
      let image = BetterElement("img", "sculptureImage");
      image.src = "images/bikeRacks/" + bikeRackImage + ".jpeg";
      tileDiv.appendChild(image);
      bikeDivPanel.appendChild(tileDiv);
    }
    app.appendChild(bikeDivPanel);
  },

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
    setTimeout(() => {
      for (let part in bikeParts) {
        bikeParts[part].parentElement.removeChild(bikeParts[part]);
      }
    }, 600);

    this.isOpen = false;
  },
};

const listOfRacks = {
  barclays: H,
  butlerTech: V,
  communityFirst: BIG,
  developmentDisabilities: H,
  fortHamHospital: V,
  hamClass: BIG,
  hamClass25: BIG,
  hamClass25Owl: BIG,
  hamiltonParksConservancy: HUGE,
  hamOrthopaedics: BIG,
  miamiURegionals: H,
  pikeFamily: V,
  primaryHealth: H,
  thyssenkruppBilsten: V,
};
