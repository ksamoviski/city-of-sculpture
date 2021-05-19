import { AboutUsPanel } from "./AboutUs.js";
import { BetterElement } from "./BetterElement.js";
import { Sculptures } from "./Sculptures.js";
import { ArtistsPanel } from "./ArtistsPanel.js";
import { GettingAround } from "./GettingAround.js";
import { Bikes } from "./Bikes.js";
import { Hamilton } from "./Hamilton.js";
import { Contact } from "./Contact.js";

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

export const SideBar = {
  sideBar: BetterElement("div", "sideBar"),
  unlocked: true,

  open: function () {
    this.sideBar.id = "sideBar";
    let menuContainer = BetterElement("div", "menuContainer");

    ourPanels.forEach((panel) => {
      panel.navElement.container.addEventListener('mouseenter', ()=> { panel.navElement.flipColors(this.unlocked) })
      panel.navElement.container.addEventListener('mouseleave', ()=> { panel.navElement.switchOff(this.unlocked) })
      panel.navElement.container.addEventListener("click", () => {
        if (!panel.isOpen) {
          panel.open();
          this.unlocked = false;
        }
        closeEverythingExceptSculptures(panel);
        if (panel === Bikes || panel === GettingAround) {
          Sculptures.close();
        } else if (
          panel === AboutUsPanel ||
          panel === ArtistsPanel ||
          panel === Contact
        ) {
          Sculptures.open();
        }
      });

      menuContainer.appendChild(panel.navElement.container);
    });

    this.sideBar.appendChild(menuContainer);

    app.appendChild(this.sideBar);
    setTimeout(() => {
      sideBar.style.transform = "translateX(15vw)";
    }, 150);

    function closeEverythingExceptSculptures(panel) {
      for (let door of ourPanels) {
        if (door != Sculptures && door != panel) {
          door.close();
        }
      }
    }
  },

  scootLeft: function () {
    this.sideBar.style.transform = "translateX(-5vw)";
  },
};

// function NavItem(menuKeyValue) {
//   let container = BetterElement("div", "navItemDiv");
//   let textElement = BetterElement("p", "navBarItem");
//   textElement.innerText = menuKeyValue;
//   container.appendChild(textElement);

//   container.addEventListener("click", () => {
//     container.style.backgroundColor = "white";
//     textElement.style.color = "#c1272d";
//   });

//   container.addEventListener("mouseenter", () => {
//     if (SideBar.unlocked) {
//       container.style.backgroundColor = "white";
//       textElement.style.color = "#c1272d";
//     }
//   });

//   container.addEventListener("mouseleave", () => {
//     if (SideBar.unlocked) {
//       container.style.backgroundColor = "#c1272d";
//       textElement.style.color = "white";
//     }
//   });
//   return container;
// }
