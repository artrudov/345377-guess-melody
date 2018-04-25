import {app, createElement} from '../../utils/utils';
import {playerStat} from '../../data/game-data';
import levelScreen from "./level-screen";

export default (data) => {
  const template = createElement(`     
    <div class="main-wrap">
      <h2 class="title main-title">${data.question}</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${data.src}"></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">      
        ${[...data.answers].map((answer, index) =>
    `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="val-${index}"/>
          <label class="main-answer" for="answer-${index}">
            <img class="main-answer-preview" src="${answer.image.url}"
                 alt="${answer.title}" width="${answer.image.width}" height="${answer.image.height}">
            ${answer.title}
          </label>
        </div>`).join(``)}
      </form>
    </div>`, `main--level main--level-artist`);

  const node = template.cloneNode(true);

  const switches = node.querySelectorAll(`.main-answer`);

  const setSwitchScreen = (item) => {
    item.addEventListener(`click`, (event) => {
      const value = event.target.getAttribute(`alt`);
      const rightQuestion = data.answers.filter((answer) => {
        return answer.isCorrect === true;
      });

      if (rightQuestion[0].title !== value) {
        const mistakeSection = app.querySelector(`.main-mistakes`);
        mistakeSection.removeChild(mistakeSection.children[0]);
        playerStat.answers.push({answer: false, time: 25});
        playerStat.mistakes += 1;
        playerStat.question += 1;
        levelScreen();
      } else {
        playerStat.answers.push({answer: true, time: 30});
        playerStat.question += 1;
        levelScreen();
      }
    });
  };

  switches.forEach(setSwitchScreen);

  return node;
};
