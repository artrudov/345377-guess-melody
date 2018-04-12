import {createElement, changeView} from '../utils/utils';
import artistScreen from "../level-screen/artist-screen";

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
    changeView(artistScreen());
  });

  return node;
};
