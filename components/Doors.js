import { AboutUsPanel } from "./AboutUs.js";
import { BetterElement } from "./BetterElement.js";

const doors = [
  AboutUsPanel,
  //   Sculptures,
  //   Artists,
  //   GettingAround,
  //   BikeRacks,
  //   Hamilton,
  //   ContactUs,
];

const app = document.getElementById("app");

export const OpenExtraSide = (door) => {
  
    doors[door].open();
};
