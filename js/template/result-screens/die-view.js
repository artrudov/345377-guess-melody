import AbstractView from '../abstract-view';
import Application from '../../application';

export default class DieView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
    <section class='logo' title='Угадай мелодию'><h1>Угадай мелодию</h1></section>

    <h2 class='title'>Какая жалость!</h2>
    <div class='main-stat'>У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role='button' tabindex='0' class='main-replay'>Попробовать ещё раз</span>`;
  }

  bind() {
    this.element.querySelector(`.main-replay`).addEventListener(`click`, (evt) => {
      evt.preventDefault();

      Application.showGame();
    });
  }
}
