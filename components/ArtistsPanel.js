import { BetterElement, NavItem } from "./BetterElement.js";

let app = document.getElementById("app");

export const ArtistsPanel = {
  isOpen: false,
  navElement: new NavItem("The Artists"),

  open: function () {
    let extraSide = BetterElement("div", "smallSide");
    let listForArtists = BetterElement("ul", "listForArtists");
    extraSide.id = "littleSide";
    extraSide.style.width = "20vw";
    extraSide.style.height = "50vh";

    extraSide.style.overflow = "hidden";

    for (let i = 1; i < 30; i++) {
      let artistElement = BetterElement("li", "artistName");
      artistElement.innerText = `artist ${i}`;
      listForArtists.appendChild(artistElement);
    }

    extraSide.addEventListener("mouseenter", () => {
      let artistMenuItem = document.querySelector();

      extraSide.style.backgroundColor = "purple";
    });

    extraSide.appendChild(listForArtists);
    app.appendChild(extraSide);

    setTimeout(() => {
      extraSide.rollout("translateX(14vw)");
    }, 10);

    this.isOpen = true;
  },

  close: function () {
    if (this.isOpen) {
      let littleSide = document.getElementById("littleSide");
      littleSide.rollout("translateX(0vw)");
      this.navElement.switchOff(true);

      setTimeout(() => {
        littleSide.parentElement.removeChild(littleSide);
      }, 300);
      this.isOpen = false;
    }
  },
};
