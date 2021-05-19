export const BetterElement = (tag, ...classList) => {
  let elementToReturn = document.createElement(tag);

  if (classList) {
    classList.forEach((className) => elementToReturn.classList.add(className));
  }

  elementToReturn.rollout = (translationParameter) => {
    elementToReturn.style.transform = translationParameter;
  };

  elementToReturn.eraseAllKids = () => {
    while (elementToReturn.lastChild) {
      elementToReturn.removeChild(elementToReturn.lastChild);
    }
  };

  elementToReturn.eraseItself = () => {
    elementToReturn.parentElement.removeChild(elementToReturn);
  };

  return elementToReturn;
};

export const waitAndThen = (callback, time) => {
  setTimeout(() => {
    callback();
  }, time);
};

export const XOut = () => {
  let x = BetterElement("h2", "xOut");
  x.innerText = "X";

  x.addEventListener("click", () => {
    let littleSide = document.getElementById("littleSide");
    littleSide.rollout("translateX(0vw)");

    setTimeout(() => {
      littleSide.parentElement.removeChild(littleSide);
    }, 300);
  });

  return x;
};

export class NavItem {
  constructor(menuItemTitle) {
    this.container = BetterElement("div", "navItemDiv");
    this.textElement = BetterElement("p", "navBarItem");
    this.textElement.innerText = menuItemTitle;
    this.container.appendChild(this.textElement);

    this.container.addEventListener("click", () => {
      this.container.style.backgroundColor = "white";
      this.textElement.style.color = "#c1272d";
      this.clicked = true;
    });
  }

  flipColors(unlocked) {
    if (unlocked) {
      this.container.style.backgroundColor = "white";
      this.textElement.style.color = "#c1272d";
    } else if (!this.clicked) {
      this.container.style.backgroundColor = "#c1272d";
      this.textElement.style.color = "white";
    }
  }

  switchOff(unlocked) {
    if (unlocked) {
      this.container.style.backgroundColor = "#c1272d";
      this.textElement.style.color = "white";
    }
  }

  // return container;
}
