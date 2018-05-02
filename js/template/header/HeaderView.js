import AbstractView from "../AbstractView";
import {gameRules} from "../../data/game-data";

export const getMinute = function (time) {
  return Math.trunc(time / gameRules.SEC_PER_MIN);
};

const RADIUS = 370;

const drawLives = (state) => {
  return `
      ${new Array(state).fill(`
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``)}`;
};

const setColorTime = (time) => time <= gameRules.QUICK_TIME ? `timer-value--finished` : ``;

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.lengthRound = Math.round(2 * Math.PI * RADIUS);
    this.shadowRound = this.lengthRound / (gameRules.MAX_TIME);
    this.timerView = this.shadowRound * (gameRules.MAX_TIME - this.state.time);
  }

  get template() {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780" stroke-dasharray="${this.lengthRound}" 
        stroke-dashoffset="${this.timerView}">
          <circle
          cx="390" cy="390" r="370"
          class="timer-line"
          style="filter: url(#blur);  transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
        </svg>
        
        <div class="timer-value ${setColorTime(this.state.time)}" style="color: ${this.color}" xmlns="http://www.w3.org/1999/xhtml">
          <span class="timer-value-mins">${getMinute(this.state.time)}</span>
          <span class="timer-value-dots">:</span>
          <span class="timer-value-secs">${this.state.time - getMinute(this.state.time) * gameRules.SEC_PER_MIN}</span>
        </div>
        <div class="main-mistakes">${drawLives(this.state.mistakes)}</div>
`;
  }
}
