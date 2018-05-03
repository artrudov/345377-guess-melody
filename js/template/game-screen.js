import ArtistView from './level-screen/artist-view';
import GenreView from './level-screen/genre-view';
import HeaderView from './header/header-view';
import DieView from "./result-screens/die-view";
import TimeoutView from "./result-screens/timeout-view";
import {GameRules} from "../data/game-data";
import Application from "../application";

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
    this.model.state.roundStartTime = this.model.state.time;

    this._interval = setInterval(() => {
      this.model.tick();

      if (this.model.state.time < GameRules.MAX_TIME) {
        this.header.renderMinutes(this.model.state.time);
        this.header.renderSeconds(this.model.state.time);
        this.header.renderRound(this.model.state.time);
      }

      if (this.model.state.time === GameRules.QUICK_TIME) {
        this.header.setColorTime();
      }

      if (this.model.state.time <= 0) {
        this.stopGame();
        this.endGame(`timeout`);
      }
    }, 1000);
  }

  answer(answer) {
    this.stopGame();

    switch (answer) {
      case true:
        this.model.state.answer.answers.push(this.model.getRoundTime());
        this.model.nextLevel();
        if (this.model.state.level >= GameRules.MAX_LEVEL) {
          this.model.state.answer.time = GameRules.MAX_TIME - this.model._state.time;
          Application.showStats(this.model._state);
        } else {
          this.startGame();
        }
        break;
      case false:
        this.model.state.answer.answers.push(-1);
        this.model.die();
        this.updateHeader();
        this.model.nextLevel();
        if (this.model.state.lives <= 0) {
          this.endGame(`die`);
        } else if (this.model.state.level >= GameRules.MAX_LEVEL) {
          this.model.state.answer.time = GameRules.MAX_TIME - this.model._state.time;
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
