import AbstractView from '../abstract-view';
import scoring from '../../scoring/score';
import playerResult from '../../result-player/result';
import Application from '../../application';
import {GAME_RULES} from '../../data/game-data';
import {getMinute} from '../header/header-view';

const COUNT_POINT = 2;
const FAIL_ANSWER = -1;

const NUM_ENDING = {
  multipleHundred: 100,
  multipleTen: 10,
  greaterThenEleven: 11,
  lessThenNineteen: 19
};

const getNumEnding = (iNumber, aEndings) => {
  let sEnding;
  let i;
  iNumber = iNumber % NUM_ENDING.multipleHundred;
  if (iNumber >= NUM_ENDING.greaterThenEleven && iNumber <= NUM_ENDING.lessThenNineteen) {
    sEnding = aEndings[2];
  } else {
    i = iNumber % NUM_ENDING.multipleTen;
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
    this.seconds = this.time - this.minutes * GAME_RULES.secPerMin;
    this.quickAnswers = this.result.answers.filter((item) => item < GAME_RULES.quickTime && item !== FAIL_ANSWER);
    this.quick = this.quickAnswers.length * COUNT_POINT - this.mistakes * COUNT_POINT;
  }

  get template() {
    return `
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;
    ${this.minutes}&nbsp;${getNumEnding(this.minutes, GAME_RULES.minutes)} и 
    ${this.seconds}&nbsp;${getNumEnding(this.seconds, GAME_RULES.seconds)}
      <br>вы&nbsp;набрали ${this.score} ${getNumEnding(this.score, GAME_RULES.points)} 
      (${this.quick} ${getNumEnding(this.quick, GAME_RULES.quick)})
      <br>совершив ${this.mistakes} ${getNumEnding((this.mistakes), GAME_RULES.mistakes)}</div>
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
