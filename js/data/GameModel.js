import {PLAYER_STAT, die, changeLevel, tick} from './game-data';
import QUESTIONS from "./questions";

const getLevel = (state) => QUESTIONS[state.level];

class GameModel {
  constructor() {
    this.restart();
  }

  get state() {
    return this._state;
  }

  hasNextlevel() {
    return getLevel(this._state.level + 1) !== void 0;
  }

  nextLevel() {
    this._state = changeLevel(this._state, this._state.level + 1);
  }

  die() {
    this._state = die(this._state);
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
    this._state = tick(this._state);
  }
}

export default GameModel;
