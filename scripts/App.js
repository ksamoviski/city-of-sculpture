import { HeaderFooter } from "../components/HeaderFooter.js";


const app = document.getElementById("app");

class App {
  static renderBasicPage() {
    HeaderFooter.render();

  }
}

App.renderBasicPage();
