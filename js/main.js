// Главный экран приложения и основной Template
const APP_SECTION = document.querySelector(`.app`);
const TEMPLATE = document.querySelector(`template`);

// Клавиатурные коды
const LEFT_KEY_CODE = 37;
const RIGHT_KEY_CODE = 39;

// Выборка шаблонов
const welcomeScreen = TEMPLATE.content.querySelector(`.main--welcome`);
const genreScreen = TEMPLATE.content.querySelector(`.main--level-genre`);
const artistScreen = TEMPLATE.content.querySelector(`.main--level-artist`);
const resultScreens = TEMPLATE.content.querySelectorAll(`.main--result`);

// Массив экранов
const gameScreens = [welcomeScreen, genreScreen, artistScreen, resultScreens[0], resultScreens[1], resultScreens[2]];

// Счетчик
let counter = 0;

// Функция выводов экранов
const renderScreen = () => {
  const renderTemplate = gameScreens[counter].cloneNode(true);
  APP_SECTION.replaceChild(renderTemplate, APP_SECTION.children[0]);
};

renderScreen();
document.addEventListener(`keydown`, (evt) => {
  if (evt.keyCode === (evt.altKey && LEFT_KEY_CODE)) {
    evt.preventDefault();
    counter = (counter > 0) ? --counter : 0;
    renderScreen();
  } else if (evt.keyCode === (evt.altKey && RIGHT_KEY_CODE)) {
    evt.preventDefault();
    counter = (counter < gameScreens.length - 1) ? ++counter : gameScreens.length - 1;
    renderScreen();
  }
});

