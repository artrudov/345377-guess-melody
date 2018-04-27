import AbstractView from '../AbstractView';
import {changeView} from '../../utils/tools';
import gameView from '../../template/level-screen/gameView';

export default class DieView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return `
    <div class='main main--result'>
    <section class='logo' title='Угадай мелодию'><h1>Угадай мелодию</h1></section>

    <h2 class='title'>Какая жалость!</h2>
    <div class='main-stat'>У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role='button' tabindex='0' class='main-replay'>Попробовать ещё раз</span>
    </div>`;
  }

  bind() {
    this.element.querySelector(`.main-replay`).onclick = (evt) => {
      evt.preventDefault();
console.log(this.state)
      changeView(gameView);
    };
  }
}
