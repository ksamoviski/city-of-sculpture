import { BetterElement } from "./BetterElement.js";

let app = document.getElementById('app');

export const ArtistsPanel = {
  isOpen: false,
  title: 'The Artists',

  open: function () {
    let extraSide = BetterElement("div", "smallSide");
    extraSide.id = "littleSide";
    extraSide.style.width = "20vw";
    extraSide.style.height = "50vh";

    extraSide.style.overflow = 'hidden';

    for (let i = 1; i < 30; i++) {
        let artistElement = BetterElement('h2', 'artistName');
        artistElement.innerText = `artist ${i}`;
        extraSide.appendChild(artistElement);
    }

    extraSide.addEventListener('mouseenter', ()=> {
        let artistMenuItem = document.querySelector()

        extraSide.style.backgroundColor = 'purple';
    })


    app.appendChild(extraSide);

    setTimeout(() => {
      extraSide.rollout("translateX(22vw)");
    }, 10);


    this.isOpen = true;
  },

  close: function() {
    let littleSide = document.getElementById('littleSide');
    littleSide.rollout('translateX(0vw)');

    setTimeout(()=> { littleSide.parentElement.removeChild(littleSide) }, 300);
    this.isOpen = false;
  }
};
