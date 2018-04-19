import {createElement} from '../../utils/utils';
import {playerStat} from "../../data/game-data";
import levelScreen from "./level-screen";

export default (data) => {
  const template = createElement(`  
    <div class="main-wrap">
      <h2 class="title">${data.question}</h2>
      <form class="genre">
         ${[...data.answers].map((answer, index) => `
        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio src="${answer.src}"></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="${answer.genre}" id="a-${index}">
          <label class="genre-answer-check" for="a-${index}"></label>
        </div>`).join(``)}
        <button class="genre-answer-send" type="submit" disabled>Ответить</button>
      </form>
    </div>`, `main--level main--level-genre`);

  const node = template.cloneNode(true);

  const sendButton = node.querySelector(`.genre-answer-send`);
  const inputs = node.querySelectorAll(`input`);

  const answerClickHandler = () => {
    sendButton.disabled = !(document.querySelectorAll(`.genre-answer input:checked`).length);
  };

  inputs.forEach((item) => {
    item.addEventListener(`click`, answerClickHandler);
  });

  sendButton.addEventListener(`click`, (event) => {
    event.preventDefault();
    const answersSelect = document.forms[0].querySelectorAll(`:checked`);
    const answersRight = data.answers.filter((answer) => {
      return answer.genre === data.genre;
    });
    const answersCheck = [...answersSelect].filter((answer) => {
      return answer.value === data.genre;
    });

    if (answersCheck.length !== answersRight.length) {
      playerStat.mistakes += 1;
    }

    playerStat.question += 1;
    levelScreen();
  });

  return node;
};

