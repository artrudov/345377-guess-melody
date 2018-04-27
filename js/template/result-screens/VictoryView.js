import AbstractView from "../AbstractView";
import {changeView} from "../../utils/tools";
import scoring from "../../scoring/score";
import playerResult from "../../result-player/result";
import gameView from '../../template/level-screen/gameView';

export default class VictoryView extends AbstractView {
  constructor(state) {
    super();
    this.result = state.answers;
    this.statistics = state.statistics;
    this.mistakes = state.mistakes;
  }

  get template() {
    return `
    <div class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали ${scoring(this.result)} баллов (0 быстрых)
      <br>совершив ${this.mistakes} ошибки</div>
    <span class="main-comparison">${playerResult(this.result, this.statistics)}</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </div>`;
  }

  bind() {
    this.element.querySelector(`.main-replay`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      changeView(gameView);
    });
  }
}
