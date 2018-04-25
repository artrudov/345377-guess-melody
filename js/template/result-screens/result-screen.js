import {changeView} from "../../utils/utils";
import mainScreen from "../main-screen/main-screen";
import win from './win';
import timeout from './timeout';
import attempt from './attempt';
import {playerStat} from "../../data/game-data";

const screens = new Map([
  [`win`, win],
  [`timeout`, timeout],
  [`mistake`, attempt]]);

export default (result, stat) => {
  const getTemplate = screens.get(result);
  const template = getTemplate(stat);
  const node = template.cloneNode(true);
  const switchScreen = node.querySelector(`.main-replay`);

  switchScreen.addEventListener(`click`, () => {
    changeView(mainScreen());
    playerStat.mistakes = 0;
    playerStat.question = 0;
    playerStat.answers = [];
  });

  return node;
};
