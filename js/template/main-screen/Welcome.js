import AbstractView from "../AbstractView";
import Application from "../../Application";

export default class Welcome extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
        <section class="logo" title="Угадай мелодию">
        <h1>Угадай мелодию</h1></section>
        <button class="main-play">Начать игру</button>
        <h2 class="title main-title">Правила игры</h2>
        <p class="text main-text">
          Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
        Ошибиться можно 3 раза.<br>
        Удачи!
        </p>`;
  }

  bind(element) {
    element.querySelector(`.main-play`).addEventListener(`click`, (evt) => {
      evt.preventDefault();

      Application.showGame();
    });
  }
}
