import AbstractView from "../AbstractView";
import scoring from "../../scoring/score";
import playerResult from "../../result-player/result";
import Application from "../../Application";
import {gameRules} from "../../data/game-data";
import {getMinute} from "../header/HeaderView";

const getNumEnding = (iNumber, aEndings) => {
  let sEnding;
  let i;
  iNumber = iNumber % 100;
  if (iNumber >= 11 && iNumber <= 19) {
    sEnding = aEndings[2];
  } else {
    i = iNumber % 10;
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
    this.seconds = this.time - this.minutes * gameRules.SEC_PER_MIN;
    this.quickAnswers = this.result.answers.filter((item) => item < gameRules.QUICK_TIME && item !== -1);
  }

  get template() {
    return `
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;
    ${this.minutes}&nbsp;${getNumEnding(this.minutes, gameRules.MINUTES)} и 
    ${this.seconds}&nbsp;${getNumEnding(this.seconds, gameRules.SECONDS)}
      <br>вы&nbsp;набрали ${this.score} ${getNumEnding(this.score, gameRules.POINTS)} 
      (${this.quickAnswers.length * 2} ${getNumEnding(this.quickAnswers.length * 2, gameRules.QUICK)})
      <br>совершив ${this.mistakes} ${getNumEnding((this.mistakes), gameRules.MISTAKES)}</div>
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
