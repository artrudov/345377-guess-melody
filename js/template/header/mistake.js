import {playerStat} from "../../data/game-data";

export default () => {
  return `
      ${new Array(playerStat.lives).fill(`
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``)}`;
};
