import { BetterElement } from "./BetterElement.js";

const app = document.getElementById("app");

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
  container.addEventListener("mouseover", () => {
    container.style.backgroundColor = "white";
    textElement.style.color = "#c1272d";
  });

  container.addEventListener("mouseout", () => {
    container.style.backgroundColor = "#c1272d";
    textElement.style.color = "white";
  });

  return container;
};



export const SideBar = {
  open: function () {
    let sideBar = BetterElement("div", "sideBar");
    let menuContainer = BetterElement('div', 'menuContainer');

    menuItems.forEach(itemText => {
        let navElements = NavItem(itemText);
        menuContainer.appendChild(navElements);
    })
    sideBar.appendChild(menuContainer);
    app.appendChild(sideBar);
    setTimeout(() => {
      sideBar.style.transform = "translateX(10vw)";
    }, 150);
  },
};

