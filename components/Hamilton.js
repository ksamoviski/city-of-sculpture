import { BetterElement } from "./BetterElement.js";

export const Hamilton = {
  isOpen: false,
  title: 'Hamilton',

  open: function () {
    console.log("Leslie Odom sucks");
    this.isOpen = true;
  },

  close: function () {
    this.isOpen = false;
  },
};
