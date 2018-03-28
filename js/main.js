// Главный экран приложения
const APP_SECTION = document.querySelector(`.app`);

// Секция с копирайтами
const COPYRIGHT_SECTION = document.querySelector(`.copyright`);

// Выборка шаблонов
const TEMPLATE = document.querySelector(`template`);
const WELCOME_SCREEN = TEMPLATE.content.querySelector(`.main--welcome`);
const GENRE_SCREEN = TEMPLATE.content.querySelector(`.main--level-genre`);
const ARTIST_SCREEN = TEMPLATE.content.querySelector(`.main--level-artist`);
const RESULT_SCREEN = TEMPLATE.content.querySelectorAll(`.main--result`);
const RESULT_WIN = RESULT_SCREEN[0];
const RESULT_TIMEOUT = RESULT_SCREEN[1];
const RESULT_ATTEMPT = RESULT_SCREEN[2];

// Массив экранов
const GAME_SCREENS = [WELCOME_SCREEN, GENRE_SCREEN, ARTIST_SCREEN, RESULT_WIN, RESULT_TIMEOUT, RESULT_ATTEMPT];

// Клавиатурные коды
const LEFT_KEY_CODE = 37;
const RIGHT_KEY_CODE = 39;

// Функция выводов экранов
const renderScreen = () => {
  const RENDER_TEMPLATE = GAME_SCREENS[counter].cloneNode(true);
  const MAIN_SECTION = document.querySelector(`.main`);

  APP_SECTION.removeChild(MAIN_SECTION);
  APP_SECTION.insertBefore(RENDER_TEMPLATE, COPYRIGHT_SECTION);
};

// Функция отработки событий и смены экранов
const CONTROL_KEY_HANDLER = (evt) => {
  switch (evt.keyCode) {
    case (evt.altKey && LEFT_KEY_CODE):
      evt.preventDefault();
      if (counter <= 0) {
        break;
      }
      counter -= 1;
      renderScreen();
      break;
    case (evt.altKey && RIGHT_KEY_CODE):
      evt.preventDefault();
      if (counter === GAME_SCREENS.length - 1) {
        break;
      }
      counter += 1;
      renderScreen();
      break;
  }
};

// Счетчик
let counter = 0;

renderScreen();
document.addEventListener(`keydown`, CONTROL_KEY_HANDLER);
