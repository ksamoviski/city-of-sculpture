import { BetterElement, XOut, NavItem } from "./BetterElement.js";

const app = document.getElementById("app");

const aboutUsStatement =
  "On August 16, 2000, Ohio’s governor declared and formally recognized Hamilton as “The City of Sculpture.” This sparked a vision for a group of community members who officially formed Hamilton, Ohio City of Sculpture, Inc. a 503c organization. Since that watershed event, a full Board of Trustees has been established and many new sculptures have been installed in public spaces around Hamilton. Other organizations and businesses are being energized through this vision and action.";

const missionLink = BetterElement('button', 'missionAndBoard');
const boardLink = BetterElement('button', 'missionAndBoard');

missionLink.innerHTML = `<p class="missionAndBoardText">Our Mission</p>`;
boardLink.innerHTML = `<p class="missionAndBoardText">Our Board</p>`;

export const AboutUsPanel = {
  isOpen: false,
  navElement: new NavItem('About Us'),

  open: function () {
    let extraSide = BetterElement("div", "smallSide");
    extraSide.id = "littleSide";
    let xOut = XOut();

    extraSide.style.width = "27vw";
    extraSide.appendChild(xOut);
    
    let statement = BetterElement("p", "aboutUsStatementDiv", "about");
    statement.innerText = aboutUsStatement;
    extraSide.appendChild(statement);
    extraSide.appendChild(missionLink);
    extraSide.appendChild(boardLink);
    app.appendChild(extraSide);

    setTimeout(() => {
      extraSide.rollout("translateX(17vw)");
    }, 10);
    this.isOpen = true;
  },

  close: function () {
    if (this.isOpen) {
      let littleSide = document.getElementById("littleSide");
      littleSide.rollout("translateX(5vw)");

      this.navElement.switchOff(true);

      setTimeout(() => {
        littleSide.parentElement.removeChild(littleSide);
      }, 300);
      this.isOpen = false;
    }
  },
};
