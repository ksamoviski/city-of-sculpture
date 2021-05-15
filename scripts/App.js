import { HeaderFooter } from "../components/HeaderFooter.js";
import { Sculptures } from '../components/Sculptures.js'
import { Bikes } from '../components/Bikes.js';


const app = document.getElementById("app");

class App {
  static renderBasicPage() {
    HeaderFooter.render();
    Sculptures.attachImages();
    Bikes.attachImages();
  }
}

App.renderBasicPage();
