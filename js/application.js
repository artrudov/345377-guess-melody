import WelcomeView from './template/main-screen/welcome-view';
import GameModel from './data/game-model';
import LoadView from './template/loading-screen/load-view';
import GameScreen from './template/game-screen';
import ErrorView from './template/error-screen/error-view';
import Loader from './data/loader';
import VictoryView from './template/result-screens/victory-view';

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
    const welcome = new WelcomeView();
    welcome.element.className = `main main--welcome`;
    changeView(welcome.element);
  }

  static showGame() {
    const gameScreen = new GameScreen(new GameModel(gameData));
    changeView(gameScreen.element);
    gameScreen.startGame();
  }

  static showStats(model) {
    const splash = new LoadView();
    changeView(splash.element);
    splash.start();
    Loader.saveResults(model.answer)
        .then(() => Loader.loadResults())
        .then((data) => {
          const victory = new VictoryView(model, data);
          victory.element.className = `main main--result`;
          changeView(victory.element);
        })
        .catch(this.showError)
        .then(() => splash.stop());
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
