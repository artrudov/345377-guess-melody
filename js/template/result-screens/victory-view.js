import AbstractView from '../abstract-view';
import scoring from '../../scoring/score';
import playerResult from '../../result-player/result';
import Application from '../../application';
import {GameRules} from '../../data/game-data';
import {getMinute} from '../header/header-view';

const COUNT_POINT = 2;
const FAIL_ANSWER = -1;

const NumEnding = {
  MULTIPLE_HUNDRED: 100,
  MULTIPLE_TEN: 10,
  GREATER_THEN_ELEVEN: 11,
  LESS_THEN_NINETEEN: 19
};

const getNumEnding = (iNumber, aEndings) => {
  let sEnding;
  let i;
  iNumber = iNumber % NumEnding.MULTIPLE_HUNDRED;
  if (iNumber >= NumEnding.GREATER_THEN_ELEVEN && iNumber <= NumEnding.LESS_THEN_NINETEEN) {
    sEnding = aEndings[2];
  } else {
    i = iNumber % NumEnding.MULTIPLE_TEN;
    switch (i) {
      case (1):
        sEnding = aEndings[0];
        break;
      case (2):
      case (3):
      case (4):
        sEnding = aEndings[1];
        break;
      default:
        sEnding = aEndings[2];
    }
  }
  return sEnding;
};

export default class VictoryView extends AbstractView {
  constructor(state, stats) {
    super();
    this.result = state.answer;
    this.mistakes = state.mistakes;
    this.time = state.answer.time;
    this.statistics = stats;

    this.score = scoring(this.result.answers);
    this.minutes = getMinute(this.time);
    this.seconds = this.time - this.minutes * GameRules.SEC_PER_MIN;
    this.quickAnswers = this.result.answers.filter((item) => item < GameRules.QUICK_TIME && item !== FAIL_ANSWER);
    this.quick = this.quickAnswers.length * COUNT_POINT - this.mistakes * COUNT_POINT;
  }

  get template() {
    return `
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;
    ${this.minutes}&nbsp;${getNumEnding(this.minutes, GameRules.MINUTES)} и 
    ${this.seconds}&nbsp;${getNumEnding(this.seconds, GameRules.SECONDS)}
      <br>вы&nbsp;набрали ${this.score} ${getNumEnding(this.score, GameRules.POINTS)} 
      (${this.quick} ${getNumEnding(this.quick, GameRules.QUICK)})
      <br>совершив ${this.mistakes} ${getNumEnding((this.mistakes), GameRules.MISTAKES)}</div>
    <span class="main-comparison">${playerResult(this.result, this.statistics)}</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>`;
  }

  bind() {
    this.element.querySelector(`.main-replay`).addEventListener(`click`, (evt) => {
      evt.preventDefault();

      Application.showGame();
    });
  }
}
