const APP_SECTION = document.querySelector(`.app`);
const TEMPLATE = document.querySelector(`template`).content;
const LEFT_KEY_CODE = 37;
const RIGHT_KEY_CODE = 39;

const welcomeScreen = TEMPLATE.querySelector(`.main--welcome`);
const genreScreen = TEMPLATE.querySelector(`.main--level-genre`);
const artistScreen = TEMPLATE.querySelector(`.main--level-artist`);
const resultScreens = TEMPLATE.querySelectorAll(`.main--result`);

const gameScreens = [welcomeScreen, genreScreen, artistScreen].concat([...resultScreens]);

let counter = 0;

const renderScreen = () => {
  const renderTemplate = gameScreens[counter].cloneNode(true);
  APP_SECTION.replaceChild(renderTemplate, APP_SECTION.children[0]);
};

document.addEventListener(`keydown`, (evt) => {
  if (!evt.altKey || (evt.keyCode !== LEFT_KEY_CODE && evt.keyCode !== RIGHT_KEY_CODE)) {
    return;
  }

  if (evt.keyCode === LEFT_KEY_CODE) {
    counter = (counter > 0) ? --counter : 0;
  } else if (evt.keyCode === RIGHT_KEY_CODE) {
    counter = (counter < gameScreens.length - 1) ? ++counter : gameScreens.length - 1;
  } else {
    return;
  }

  evt.preventDefault();
  renderScreen();
});
renderScreen();
