import { BetterElement } from "./BetterElement.js";
import { PennyFarthing } from "./PennyFarthing.js";
import { shutterBike } from "./PennyFarthing.js";

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
    bikeDivPanel.style.opacity = '1';
    PennyFarthing(0, 0, 0);
    this.isOpen = true;
  },

  close: function () {
    if (this.isOpen) {
      bikeDivPanel.style.opacity = '0';
      setTimeout(()=> sculptureDivPanel.rollout('translateX(100vw)'), 500);
      let startingOpacity = 0;
      shutterBike(startingOpacity);
      setTimeout(() => {
        for (let part in bikeParts) {
          bikeParts[part].parentElement.removeChild(bikeParts[part]);
        }
      }, 600);
  
      this.isOpen = false;

    }
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
