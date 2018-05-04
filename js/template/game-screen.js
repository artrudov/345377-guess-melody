import ArtistView from './level-screen/artist-view';
import GenreView from './level-screen/genre-view';
import HeaderView from './header/header-view';
import DieView from './result-screens/die-view';
import TimeoutView from './result-screens/timeout-view';
import {GAME_RULES} from '../data/game-data';
import Application from '../application';

const ROUND_FAIL = -1;
const END_GAME = 0;
const TIMER_INTERVAL = 1000;

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
      this.header.renderMinutes(this.model.state.time);
      this.header.renderSeconds(this.model.state.time);
      this.header.renderRound(this.model.state.time);

      if (this.model.state.time === GAME_RULES.quickTime) {
        this.header.setColorTime();
      }

      if (this.model.state.time <= END_GAME) {
        this.stopGame();
        this.endGame(`timeout`);
      }
    }, TIMER_INTERVAL);
  }

  answer(answer) {
    this.stopGame();
    this.model.nextLevel();

    switch (answer) {
      case true:
        this.model.state.answer.answers.push(this.model.getRoundTime());
        if (this.checkLevel()) {
          this.showStats();
        } else {
          this.startGame();
        }
        break;
      case false:
        this.model.state.answer.answers.push(ROUND_FAIL);
        this.model.die();
        this.updateHeader();
        if (this.model.state.lives <= END_GAME) {
          this.endGame(`die`);
        } else if (this.checkLevel()) {
          this.showStats();
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

  checkLevel() {
    return this.model.state.level >= GAME_RULES.maxLevel;
  }

  showStats() {
    this.model.state.answer.time = GAME_RULES.maxTime - this.model._state.time;
    Application.showStats(this.model._state);
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
