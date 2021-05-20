import { HeaderFooter } from "../components/HeaderFooter.js";
import { Sculptures } from "../components/Sculptures.js";
import { Bikes } from "../components/Bikes.js";
import { HomeBackground } from "../components/HomeBackground.js";

const app = document.getElementById("app");

class App {
  static renderBasicPage() {
    HeaderFooter.render();
    Sculptures.attachImages();
    Bikes.attachImages();

    setTimeout(() => {
      Sculptures.open();
    }, 300);
  }
}

App.renderBasicPage();
