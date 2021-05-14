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


const NavItem = (menuKeyValue) => {
  let container = BetterElement("div", "navItemDiv");
  let textElement = BetterElement("h2", "navBarItem");
  textElement.innerText = menuKeyValue;
  container.appendChild(textElement);
  container.addEventListener("mouseenter", () => {

    for (let menuItemElement of Array.from(document.querySelectorAll('.navBarItem'))) {
        menuItemElement.style.color = 'white';
    }
    for (let container of Array.from(document.querySelectorAll('.navItemDiv'))) {
        container.style.backgroundColor = '#c1272d';
    }
    for (let panel of ourPanels) {
      if (panel.isOpen) {
        panel.close();

        container.style.backgroundColor = "#c1272d";
        textElement.style.color = "white";
      }
      if (panel.title === menuKeyValue) {
        panel.open();
      }
    }
    container.style.backgroundColor = "white";
    textElement.style.color = "#c1272d";
  });

  return container;
};

export const SideBar = {
  open: function () {
    let sideBar = BetterElement("div", "sideBar");
    sideBar.id = "sideBar";
    let menuContainer = BetterElement("div", "menuContainer");

    ourPanels.forEach((panel) => {
      let navElements = NavItem(panel.title);
      menuContainer.appendChild(navElements);
    });

    sideBar.appendChild(menuContainer);

    sideBar.addEventListener('mouseleave', ()=> {
        ourPanels.forEach(panel => {
            if (panel.isOpen) {
                panel.close();
            }
        })
    })

    app.appendChild(sideBar);
    setTimeout(() => {
      sideBar.style.transform = "translateX(10vw)";
    }, 150);
  },
};
