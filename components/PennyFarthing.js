import { BetterElement } from "./BetterElement.js";

const app = document.getElementById("app");

let bikeParts = {
  bigWheel: BetterElement("img", "pennyFarthing", "bigWheel"),
  pennyFrame: BetterElement("img", "pennyFarthing", "pennyFrame"),
  smallWheel: BetterElement("img", "pennyFarthing", "smallWheel"),
};

bikeParts.bigWheel.src = "../images/bigWheel.png";
bikeParts.pennyFrame.src = "../images/pennyFrameWithTow.png";
bikeParts.smallWheel.src = "../images/smallWheel.png";

export const PennyFarthing = (leftSpot, bigRotator, smallRotator) => {
  let racksPanel = document.querySelector(".bikeDivPanel");

  for (let part in bikeParts) {
    bikeParts[part].style.opacity = '1';
    app.appendChild(bikeParts[part]);
  }

  racksPanel.style.display = "grid";

  function rideOldBike() {
    function placeTheWheel() {
      bikeParts.bigWheel.style.left = leftSpot + "px";
      bikeParts.bigWheel.style.transform = `rotate(${bigRotator}deg)`;

      bikeParts.smallWheel.style.left = leftSpot + "px";
      bikeParts.smallWheel.style.transform = `rotate(${smallRotator}deg)`;
      bikeParts.pennyFrame.style.left = leftSpot - 20 + "px";
      racksPanel.style.left = leftSpot + "px";

      leftSpot += 5;
      bigRotator += 3;
      smallRotator += 12;

      if (leftSpot < window.innerWidth + 275) {
        requestAnimationFrame(() => {
          rideOldBike(leftSpot, bigRotator, smallRotator);
        });
      }
    }

    requestAnimationFrame(placeTheWheel);
  }
  rideOldBike();
};

export const shutterBike = (startingOpacity) => {
  if (startingOpacity < 100) {
    setTimeout(() => {
      for (let part in bikeParts) {
        bikeParts[part].style.opacity = 1 - (startingOpacity * 0.01).toString();
      }
      startingOpacity++;
      shutterBike(startingOpacity);
    }, 30);

  }
};
