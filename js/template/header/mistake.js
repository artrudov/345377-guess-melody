import {playerStat} from "../../data/game-data";

export default () => {
  const mistakeSection = document.createElement(`div`);
  mistakeSection.className = `main-mistakes`;
  mistakeSection.innerHTML = `
      ${new Array(playerStat.mistakes)
      .fill(`
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``)}`;


  return headerSection.replaceChild(mistakeSection, headerSection[-1]);
};
