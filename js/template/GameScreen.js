import ArtistView from './level-screen/ArtistView';
import GenreView from './level-screen/GenreView';
import HeaderView from './header/HeaderView';
import VictoryView from './result-screens/VictoryView';
import DieView from "./result-screens/DieView";
import TimeoutView from "./result-screens/TimeoutView";
import {gameRules} from "../data/game-data";
import Application from "../Application";

const getCurrentView = (state) => {
  return state.getType() === `artist` ? new ArtistView(state.getCurrentLevel()) : new GenreView(state.getCurrentLevel());
};

class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this.content = getCurrentView(this.model);

    this.root = document.createElement(`div`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);

    this._interval = null;
    this.roundStartTime = 0;
    this.roundStopTime = 0;
    this.roundTime = 0;
  }

  get element() {
    return this.root;
  }

  stopGame() {
    clearInterval(this._interval);
    this.roundStopTime = this.model.state.time;
    this.roundTime = this.roundStartTime - this.roundStopTime;
  }

  startGame() {
    this.changeLevel();
    this.roundStartTime = this.model.state.time;

    this._interval = setInterval(() => {
      this.model.tick();
      this.updateHeader();
    }, 1000);
  }

  answer(answer) {
    this.stopGame();

    switch (answer) {
      case true:
        this.model.state.answers.push({answer, time: this.roundTime});
        this.model.nextLevel();
        if (this.model.state.level >= gameRules.MAX_LEVEL) {
          this.endGame(`win`);
        } else {
          this.startGame();
        }
        break;
      case false:
        this.model.state.answers.push({answer, time: this.roundTime});
        this.model.die();
        this.model.nextLevel();
        if (this.model.state.lives <= 0) {
          this.endGame(`die`);
        } else {
          this.startGame();
        }
        break;
    }
  }

  restart(continueGame) {
    if (!continueGame) {
      this.model.restart();
    }

    this.startGame();
  }

  updateHeader() {

    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
    if (this.model.state.time <= 0) {
      this.stopGame();
      this.endGame(`timeout`);
    }
  }

  changeLevel() {
    this.updateHeader();
    const level = getCurrentView(this.model);
    level.onAnswer = this.answer.bind(this);
    this.changeContentView(level);
  }

  endGame(win) {
    let gameOver = ``;

    if (win === `win`) {
      gameOver = new VictoryView(this.model.state);
    }

    if (win === `die`) {
      gameOver = new DieView();
    }

    if (win === `timeout`) {
      gameOver = new TimeoutView();
    }
    // gameOver.onRestart = this.restart.bind(this);

    Application.showStats(gameOver);
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }
}

export default GameScreen;
