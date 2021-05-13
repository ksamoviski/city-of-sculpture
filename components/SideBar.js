import { BetterElement } from "./BetterElement.js";
import { OpenExtraSide } from "./Doors.js";

const app = document.getElementById("app");

let littleDoorOpen = false;

const menuItems = [
  "About Us",
  "The Sculptures",
  "The Artists",
  "Getting Around",
  "Sculptural Bike Racks",
  "Hamilton",
  "Contact Us",
];

const NavItem = (navItemText) => {
  let container = BetterElement("div", "navItemDiv");
  let textElement = BetterElement("h2", "navBarItem");
  textElement.innerText = navItemText;
  container.appendChild(textElement);
  container.addEventListener("mouseenter", () => {
    if (!littleDoorOpen) {
      container.style.backgroundColor = "white";
      textElement.style.color = "#c1272d";
      OpenExtraSide(menuItems.indexOf(navItemText));
      littleDoorOpen = true;
    }
  });

  container.addEventListener("mouseleave", () => {
    container.style.backgroundColor = "#c1272d";
    textElement.style.color = "white";
    littleDoorOpen = false;
  });

  return container;
};

export const SideBar = {
  open: function () {
    let sideBar = BetterElement("div", "sideBar");
    sideBar.id = "sideBar";
    let menuContainer = BetterElement("div", "menuContainer");

    menuItems.forEach((itemText) => {
      let navElements = NavItem(itemText);
      menuContainer.appendChild(navElements);
    });
    sideBar.appendChild(menuContainer);
    app.appendChild(sideBar);
    setTimeout(() => {
      sideBar.style.transform = "translateX(10vw)";
    }, 150);
  },
};
