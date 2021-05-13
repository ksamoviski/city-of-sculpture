import { Header } from "../components/Header.js";

const app = document.getElementById("app");

class App {
  static renderBasicPage() {
    console.log("Maria's walrus is here");
    Header.render();
  }
}

App.renderBasicPage();
