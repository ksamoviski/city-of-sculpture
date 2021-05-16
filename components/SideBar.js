import { AboutUsPanel } from "./AboutUs.js";
import { BetterElement } from "./BetterElement.js";
import { Sculptures } from "./Sculptures.js";
import { ArtistsPanel } from "./ArtistsPanel.js";
import { GettingAround } from "./GettingAround.js";
import { Bikes } from "./Bikes.js";
import { Hamilton } from "./Hamilton.js";
import { Contact } from "./Contact.js";
import { HomeBackground } from "./HomeBackground.js";

const app = document.getElementById("app");

const ourPanels = [
  AboutUsPanel,
  Sculptures,
  ArtistsPanel,
  GettingAround,
  Bikes,
  Hamilton,
  Contact,
];

const NavItem = (menuKeyValue) => {
  let container = BetterElement("div", "navItemDiv");
  let textElement = BetterElement("h2", "navBarItem");
  textElement.innerText = menuKeyValue;
  container.appendChild(textElement);

  container.addEventListener("mouseenter", () => {
    container.style.backgroundColor = "white";
    textElement.style.color = "#c1272d";
  });

  container.addEventListener("mouseleave", () => {
    container.style.backgroundColor = "#c1272d";
    textElement.style.color = "white";
  });

  container.addEventListener("click", () => {
    for (let panel of ourPanels) {
      if (panel.isOpen) {
        panel.close();
      }

      if (
        menuKeyValue === "The Sculptures" ||
        menuKeyValue === "The Artists" ||
        menuKeyValue === "Getting Around"
      ) {
        HomeBackground.close();
      }

      if (menuKeyValue === "Getting Around") {
        SideBar.scootLeft();
      }

      if (panel.title === menuKeyValue) {
        panel.open();
      }
    }
  });

  return container;
};

export const SideBar = {
  sideBar: BetterElement("div", "sideBar"),

  open: function () {
    this.sideBar.id = "sideBar";
    let menuContainer = BetterElement("div", "menuContainer");

    ourPanels.forEach((panel) => {
      let navElements = NavItem(panel.title);
      menuContainer.appendChild(navElements);
    });

    this.sideBar.appendChild(menuContainer);

    app.appendChild(this.sideBar);
    setTimeout(() => {
      sideBar.style.transform = "translateX(10vw)";
    }, 150);
  },

  scootLeft: function() {
    this.sideBar.style.transform = 'translateX(-5vw)';
  }


};
