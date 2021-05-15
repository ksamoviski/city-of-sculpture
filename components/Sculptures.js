import { BetterElement } from "./BetterElement.js";

export const Sculptures = {
  isOpen: false,
  title: 'The Sculptures',

  open: function () {
    
    this.isOpen = true;
  },

  close: function () {
    this.isOpen = false;
  },
};
