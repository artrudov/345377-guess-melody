import {changeView} from "../../utils/utils";
import mainScreen from "../main-screen/main-screen";
import win from './win';
import timeout from './timeout';
import attempt from './attempt';
import {playerStat} from "../../data/game-data";

const screens = new Map([
  [`win`, win()],
  [`timeout`, timeout()],
  [`mistake`, attempt()]]);

export default (result) => {
  const template = screens.get(result);
  const node = template.cloneNode(true);
  const switchScreen = node.querySelector(`.main-replay`);

  switchScreen.addEventListener(`click`, () => {
    playerStat.mistakes = 0;
    playerStat.question = 0;
    playerStat.answers = [];
    changeView(mainScreen());
  });

  return node;
};
