import Welcome from "./template/main-screen/Welcome";
import GameModel from "./data/GameModel";
import GameScreen from "./template/GameScreen";

const main = document.querySelector(`.main`);
const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

export default class Application {
  static showWelcome() {
    const welcome = new Welcome();
    welcome.element.className = `main main--welcome`;
    changeView(welcome.element);
  }

  static showGame() {
    const gameScreen = new GameScreen(new GameModel());
    changeView(gameScreen.element);
    gameScreen.startGame();
  }

  static showStats(view) {
    view.element.className = `main main--result`;
    changeView(view.element);
  }
}
