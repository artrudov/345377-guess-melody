import Welcome from "./template/main-screen/Welcome";
import GameModel from "./data/GameModel";
import LoadView from "./template/loading-screen/LoadView";
import GameScreen from "./template/GameScreen";
import ErrorView from "./template/error-screen/ErrorView";
import Loader from "./data/Loader";
import VictoryView from "./template/result-screens/VictoryView";

const main = document.querySelector(`.main`);
const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

let gameData;

export default class Application {
  static start() {
    const splash = new LoadView();
    changeView(splash.element);
    splash.start();
    Loader.loadData()
        .then(this.showWelcome)
        .catch(this.showError)
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

  static showStats(model) {
    const loader = new LoadView();
    changeView(loader.element);
    Loader.saveResults(model.answer)
        .then(() => Loader.loadResults())
        .then((data) => {
          const victory = new VictoryView(model, data);
          victory.element.className = `main main--result`;
          changeView(victory.element);
        })
        .catch(this.showError);
  }

  static showEnd(view) {
    const endScreen = view;
    endScreen.element.className = `main main--result`;
    changeView(endScreen.element);
  }

  static showError(error) {
    const errorView = new ErrorView(error);
    changeView(errorView.element);
  }
}
