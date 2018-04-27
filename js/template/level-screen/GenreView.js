import AbstractView from "../AbstractView";

export default class GenreView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `
    <div class="main--level main--level-genre">
     <div class="main-wrap">
      <h2 class="title">${this.level.question}</h2>
      <form class="genre">
        ${[...this.level.answers].map((answer, index) => `
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
          <input type="checkbox" name="answer" value="${answer.genre}" id="${index}">
          <label class="genre-answer-check" for="${index}"></label>
          </div>`).join(``)}
        <button class="genre-answer-send" type="submit" disabled>Ответить</button>
      </form>
     </div>
    </div>`;
  }

  onAnswer() {

  }

  bind() {
    const sendButton = this.element.querySelector(`.genre-answer-send`);

    this.element.addEventListener(`click`, () => {
      sendButton.disabled = !(document.querySelectorAll(`.genre-answer input:checked`).length);
    });

    sendButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();

      const answersSelect = Array.from(document.forms[0].querySelectorAll(`:checked`));
      const answersRight = this.level.answers.filter((answer) => {
        return answer.genre === this.level.genre;
      });

      const answersCheck = answersSelect.filter((answer) => {
        return answer.value === this.level.genre;
      });

      this.onAnswer(answersRight.length === answersCheck.length);
    });
  }
}
