import { BetterElement, NavItem } from "./BetterElement.js";

export const Hamilton = {
  isOpen: false,
  navElement: new NavItem('Hamilton'),


  open: function () {
    console.log("Leslie Odom sucks");
    this.isOpen = true;
  },

  close: function () {
    if (this.isOpen) {
      this.navElement.switchOff(true);

      this.isOpen = false;
    }
  },
};
