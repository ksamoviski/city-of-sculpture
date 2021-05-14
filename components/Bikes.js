import { BetterElement } from "./BetterElement.js";

export const Bikes = {
  isOpen: false,
  title: 'Sculptural Bike Racks',

  open: function () {
    console.log("Get on yer bike london");
    this.isOpen = true;
  },

  close: function () {
    this.isOpen = false;
  },
};
