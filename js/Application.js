import Welcome from "./template/main-screen/Welcome";
import GameModel from "./data/GameModel";
import LoadView from "./template/loading-screen/LoadView";
import GameScreen from "./template/GameScreen";
import ErrorView from "./template/error-screen/ErrorView";

const main = document.querySelector(`.main`);
const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

let gameData;

export default class Application {
  static start() {
    const splash = new LoadView();
    changeView(splash.element);
    splash.start();
    window.fetch(`https://es.dump.academy/guess-melody/questions`)
        .then(checkStatus)
        .then((response) => response.json())
        .then(Application.showWelcome)
        .catch(Application.showError)
        .then(() => splash.stop());
  }

  static showWelcome(data) {
    gameData = data;
    const welcome = new Welcome();
    welcome.element.className = `main main--welcome`;
    changeView(welcome.element);
  }

  static showGame() {
    const gameScreen = new GameScreen(new GameModel(gameData));
    changeView(gameScreen.element);
    gameScreen.startGame();
  }

  static showStats(view) {
    view.element.className = `main main--result`;
    changeView(view.element);
  }

  static showError(error) {
    const errorView = new ErrorView(error);
    changeView(errorView.element);
  }
}
