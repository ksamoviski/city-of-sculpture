import { Header } from "../components/Header.js";


const app = document.getElementById("app");

class App {
  static renderBasicPage() {
    Header.render();

  }
}

App.renderBasicPage();
