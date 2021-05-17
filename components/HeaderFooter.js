import { BetterElement } from "./BetterElement.js";
import { SideBar } from "./SideBar.js";

const app = document.getElementById("app");
let screenHeight = window.innerHeight;
console.log(screenHeight);

export const HeaderFooter = {
  render: function () {
    let header = BetterElement("header", "header");
    let footer = BetterElement("footer", "footer");
    let outerStripesBox = BetterElement("div", "outerHamburger");
    let innerStripesBox = BetterElement("div", "innerHamburger");

    screenHeight < 1000
      ? (header.style.height = screenHeight / 6 + "px")
      : (header.style.height = screenHeight / 5 + "px");

    header.innerHTML = `<img src ="../images/logo.png"/> `;

    addWarrantOfficerStripes();

    function addWarrantOfficerStripes() {
      for (let i = 0; i < 3; i++) {
        let bar = BetterElement("span", "bar");
        bar.style.top = i * 10 + 15 + "px";
        innerStripesBox.appendChild(bar);
      }

      outerStripesBox.addEventListener("mouseover", () => {
        scrollingBars(resetBar.bind("up"));
      });

      outerStripesBox.addEventListener("mouseout", () => {
        scrollingBars(resetBar.bind("down"));
      });


      function scrollingBars(callBackToResetBar) {
        for (let j = 0; j < 3; j++) {
          setTimeout(callBackToResetBar, j * 100, j);
        }
      }
    
      function resetBar(j) {
        if (this === "up") {
          innerStripesBox.childNodes[j].style.opacity = "0.5";
          innerStripesBox.childNodes[j].style.transform =
            "translateY(-11px)";
          innerStripesBox.childNodes[j].style.backgroundColor = "darkBlue";
        } else if (this === "down") {
          innerStripesBox.childNodes[j].style.opacity = "1";
          innerStripesBox.childNodes[j].style.transform = "translateY(0px)";
          innerStripesBox.childNodes[j].style.backgroundColor = "#c1272d";
        }
      }



      outerStripesBox.appendChild(innerStripesBox);
      header.appendChild(outerStripesBox);
    }

    app.appendChild(header);
    app.appendChild(footer);
    setTimeout(() => {
      header.rollout("translateY(0vh)");
    }, 20);
    setTimeout(() => {
      SideBar.open();
    }, 50);
  },
};
