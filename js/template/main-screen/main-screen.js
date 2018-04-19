import {app, createElement} from '../../utils/utils';
import gameScreen from '../level-screen/level-screen';
import header from "../header/header";

const template = createElement(`
<section class="logo" title="Угадай мелодию">
  <h1>Угадай мелодию</h1></section>
  <button class="main-play">Начать игру</button>
  <h2 class="title main-title">Правила игры</h2>
  <p class="text main-text">
    Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
  Ошибиться можно 3 раза.<br>
  Удачи!
  </p>`, `main--welcome`);

export default () => {
  const node = template.cloneNode(true);
  const switcher = node.querySelector(`.main-play`);

  switcher.addEventListener(`click`, () => {
    app.insertBefore(header(), app.children[0]);
    gameScreen();
  });

  return node;
};
