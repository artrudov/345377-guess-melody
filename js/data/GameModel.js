import {PLAYER_STAT} from './game-data';

class GameModel {
  constructor(data) {
    this.data = data;
    this.restart();
  }

  get state() {
    return this._state;
  }

  getLevel() {
    return this.data[this._state.level];
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
    return this.getLevel(this._state);
  }

  getType() {
    return this.data[this._state.level].type;
  }

  tick() {
    this._state.time -= 1;
  }
}

export default GameModel;
