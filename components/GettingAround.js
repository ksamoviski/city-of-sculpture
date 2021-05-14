import { BetterElement } from "./BetterElement.js";

export const GettingAround = {
  isOpen: false,
  title: 'Getting Around',

  open: function () {
    console.log("Get this toots");
    this.isOpen = true;
  },

  close: function () {
    this.isOpen = false;
  },
};
