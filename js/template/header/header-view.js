import AbstractView from '../abstract-view';
import {GAME_RULES} from '../../data/game-data';

const RADIUS = 370;

export const getMinute = function (time) {
  return Math.trunc(time / GAME_RULES.secPerMin);
};

const drawLives = (state) => {
  return `
      ${new Array(state).fill(`
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``)}`;
};

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.lengthRound = Math.round(2 * Math.PI * RADIUS);
    this.shadowRound = this.lengthRound / (GAME_RULES.maxTime);
    this.timerView = this.shadowRound * (GAME_RULES.maxTime - this.state.time);
    this.timerAlert = this.state.time <= GAME_RULES.quickTime ? `timer-value--finished` : ``;
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
        
        <div class="timer-value ${this.timerAlert}" xmlns="http://www.w3.org/1999/xhtml">
          <span class="timer-value-mins">${getMinute(this.state.time)}</span>
          <span class="timer-value-dots">:</span>
          <span class="timer-value-secs">${this.state.time - getMinute(this.state.time) * GAME_RULES.secPerMin}</span>
        </div>
        <div class="main-mistakes">${drawLives(this.state.mistakes)}</div>
`;
  }

  renderMinutes(time) {
    const minutesElement = this.element.querySelector(`.timer-value-mins`);
    minutesElement.textContent = `${getMinute(time)}`;
  }

  renderSeconds(time) {
    const secondsElement = this.element.querySelector(`.timer-value-secs`);
    secondsElement.textContent = `${time - getMinute(time) * GAME_RULES.secPerMin}`;
  }

  renderRound(time) {
    const timerRound = this.element.querySelector(`.timer`);
    timerRound.setAttribute(`stroke-dashoffset`, this.shadowRound * (GAME_RULES.maxTime - time));
  }

  setColorTime() {
    const timer = this.element.querySelector(`.timer-value`);
    timer.classList.add(`timer-value--finished`);
  }
}
