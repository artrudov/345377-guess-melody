const LEFT_KEY_CODE = 37;
const RIGHT_KEY_CODE = 39;

const appSection = document.querySelector(`.app`);
const template = document.querySelector(`template`).content;

const welcomeScreen = template.querySelector(`.main--welcome`);
const genreScreen = template.querySelector(`.main--level-genre`);
const artistScreen = template.querySelector(`.main--level-artist`);
const resultScreens = template.querySelectorAll(`.main--result`);

const gameScreens = [welcomeScreen, genreScreen, artistScreen].concat([...resultScreens]);

let counter = 0;
let currentScreen = 0;

const renderScreen = () => {
  const renderTemplate = gameScreens[counter].cloneNode(true);
  appSection.replaceChild(renderTemplate, appSection.children[0]);
};

const getNextScreenNumber = (count, current) => {
  const next = current % count;
  return next + (next < 0 ? count : 0);
};

const KeyCodes = {
  [LEFT_KEY_CODE]: -1,
  [RIGHT_KEY_CODE]: 1
};

document.addEventListener(`keydown`, (evt) => {
  if (!evt.altKey || !KeyCodes[evt.keyCode]) {
    return;
  }

  evt.preventDefault();

  currentScreen += KeyCodes[evt.keyCode];
  counter = getNextScreenNumber(gameScreens.length, currentScreen);
  renderScreen();
});

renderScreen();
