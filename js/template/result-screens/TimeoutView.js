import AbstractView from "../AbstractView";
import {changeView} from "../../utils/tools";
import gameView from "../level-screen/gameView";

export default class TimeoutView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
    <div class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  
      <h2 class="title">Увы и ах!</h2>
      <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
      <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
    </div>`;
  }

  bind() {
    this.element.querySelector(`.main-replay`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      changeView(gameView);
    });
  }
}
