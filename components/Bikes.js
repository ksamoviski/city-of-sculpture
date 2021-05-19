import { BetterElement, NavItem } from "./BetterElement.js";
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
  navElement: new NavItem('Sculptural Bike Racks'),


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
    this.attachImages();
    bikeDivPanel.style.opacity = "1";
    PennyFarthing(0, 0, 0);
    this.isOpen = true;
  },

  close: function () {
    if (this.isOpen) {
      bikeDivPanel.style.opacity = "0";
      let startingOpacity = 0;
      shutterBike(startingOpacity);
      // bikeDivPanel.eraseAllKids();
      // bikeDivPanel.parentElement.removeChild(bikeDivPanel);

      setTimeout( ()=> { bikeDivPanel.eraseItself() }, 2000)
      this.navElement.switchOff(true);

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
