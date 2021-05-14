import { BetterElement } from "./BetterElement.js";

export const ArtistsPanel = {
  isOpen: false,
  title: 'The Artists',

  open: function () {
    console.log("Art these");
    this.isOpen = true;
  },

  close: function () {
    this.isOpen = false;
  },
};
