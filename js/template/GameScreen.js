import ArtistView from './level-screen/ArtistView';
import GenreView from './level-screen/GenreView';
import HeaderView from './header/HeaderView';
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
  }

  get element() {
    return this.root;
  }

  stopGame() {
    clearInterval(this._interval);
    this.model.state.roundEndTime = this.model._state.time;
  }

  startGame() {
    this.changeLevel();
    this.model.state.roundStartTime = this.model._state.time;

    this._interval = setInterval(() => {
      this.model.tick();
      this.updateHeader();
    }, 1000);
  }

  answer(answer) {
    this.stopGame();

    switch (answer) {
      case true:
        this.model.state.answer.answers.push(this.model.getRoundTime());
        this.model.nextLevel();
        if (this.model.state.level >= gameRules.MAX_LEVEL) {
          this.model.state.answer.time = gameRules.MAX_TIME - this.model._state.time;
          Application.showStats(this.model._state);
        } else {
          this.startGame();
        }
        break;
      case false:
        this.model.state.answer.answers.push(-1);
        this.model.die();
        this.model.nextLevel();
        if (this.model.state.lives <= 0) {
          this.endGame(`die`);
        } else if (this.model.state.level >= gameRules.MAX_LEVEL) {
          this.model.state.answer.time = gameRules.MAX_TIME - this.model._state.time;
          Application.showStats(this.model._state);
        } else {
          this.startGame();
        }
        break;
    }
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

  endGame(status) {
    let gameOver = ``;

    if (status === `die`) {
      gameOver = new DieView();
      Application.showEnd(gameOver);
    }

    if (status === `timeout`) {
      gameOver = new TimeoutView();
      Application.showEnd(gameOver);
    }

    this.model.restart();
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }
}

export default GameScreen;
