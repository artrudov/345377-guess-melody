import {PLAYER_STAT} from './game-data';
import QUESTIONS from "./questions";

const getLevel = (state) => QUESTIONS[state.level];

class GameModel {
  constructor() {
    this.restart();
  }

  get state() {
    return this._state;
  }

  nextLevel() {
    this._state.level += 1;
  }

  die() {
    this._state.mistakes += 1;
    this._state.lives -= 1;
  }

  getRoundTime() {
    return this._state.roundStartTime - this._state.roundEndTime;
  }

  restart() {
    this._state = PLAYER_STAT;
  }

  getCurrentLevel() {
    return getLevel(this._state);
  }

  getType() {
    return QUESTIONS[this._state.level].type;
  }

  tick() {
    this._state.time -= 1;
  }
}

export default GameModel;
