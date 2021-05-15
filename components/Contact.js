import { BetterElement } from "./BetterElement.js";

export const Contact = {
  isOpen: false,
  title: 'Contact Us',

  open: function () {
    console.log("Contact theeeeese");
    this.isOpen = true;
  },

  close: function () {
    this.isOpen = false;
  },
};
