import AbstractView from "../AbstractView";

export default class ArtistView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `
    <div class="main--level main--level-genre">
     <div class="main-wrap">
      <h2 class="title main-title">${this.level.question}</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${this.level.src}"></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">    
      ${[...this.level.answers].map((answer, index) =>
    `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="val-${index}"/>
          <label class="main-answer" for="answer-${index}">
            <img class="main-answer-preview" src="${answer.image.url}"
                 alt="${answer.title}" width="${answer.image.width}" height="${answer.image.height}" data="${index}">
            ${answer.title}
          </label>
        </div>`).join(``)}
      </form>
     </div>
    </div>
    `;
  }

  onAnswer() {}

  bind() {
    const answersElement = this.element.querySelector(`.main-list`);

    answersElement.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      const answerIndex = evt.target.getAttribute(`data`);
      const answer = this.level.answers[answerIndex].isCorrect;
      this.onAnswer(answer);
    });
  }
}
