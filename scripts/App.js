import { HeaderFooter } from "../components/HeaderFooter.js";
import { HomeBackground } from"../components/HomeBackground.js";

const app = document.getElementById("app");

class App {
  static renderBasicPage() {
    HeaderFooter.render();
  HomeBackground.render();
  }
}

App.renderBasicPage();
