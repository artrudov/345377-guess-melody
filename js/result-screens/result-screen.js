import {changeView} from "../utils/utils";
import mainScreen from "../main-screen/main-screen";
import win from './win';
import timeout from './timeout';
import attempt from './attempt';

const getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const screens = [win, timeout, attempt];

export default () => {
  const template = screens[getRandom(0, 2)];
  const node = template.cloneNode(true);
  const switchScreen = node.querySelector(`.main-replay`);

  switchScreen.addEventListener(`click`, () => {
    changeView(mainScreen());
  });

  return node;
};
