import AbstractView from "../AbstractView";
import scoring from "../../scoring/score";
import playerResult from "../../result-player/result";
import Application from "../../Application";
import {gameRules} from "../../data/game-data";
import {getMinute, SEC_PER_MIN} from "../header/HeaderView";

export default class VictoryView extends AbstractView {
  constructor(state) {
    super();
    this.result = state.answers;
    this.statistics = state.statistics;
    this.mistakes = state.mistakes;
    this.time = gameRules.MAX_TIME - state.time;
    this.quickAnswers = this.result.filter((item) => item.time < gameRules.QUICK_TIME);
  }

  get template() {
    return `
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;
    ${getMinute(this.time)}&nbsp;минуты и 
    ${this.time - getMinute(this.time) * SEC_PER_MIN}&nbsp;секунд
      <br>вы&nbsp;набрали ${scoring(this.result)} баллов (${this.quickAnswers.length} быстрых)
      <br>совершив ${this.mistakes} ошибки</div>
    <span class="main-comparison">${playerResult(this.result, this.statistics)}</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>`;
  }

  bind() {
    this.element.querySelector(`.main-replay`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      Application.showWelcome();
    });
  }
}
