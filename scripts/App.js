import { HeaderFooter } from "../components/HeaderFooter.js";
import { Sculptures } from '../components/Sculptures.js'


const app = document.getElementById("app");

class App {
  static renderBasicPage() {
    HeaderFooter.render();
    Sculptures.attachImages();

  }
}

App.renderBasicPage();
