// Главный экран приложения
const APP_SECTION = document.querySelector(`.app`);

// Выборка шаблонов
const TEMPLATE = document.querySelector(`template`);
const WELCOME_SCREEN = TEMPLATE.content.querySelector(`.main--welcome`);
const GENRE_SCREEN = TEMPLATE.content.querySelector(`.main--level-genre`);
const ARTIST_SCREEN = TEMPLATE.content.querySelector(`.main--level-artist`);
const RESULT_SCREEN = TEMPLATE.content.querySelectorAll(`.main--result`);

// Массив экранов
const GAME_SCREENS = [WELCOME_SCREEN, GENRE_SCREEN, ARTIST_SCREEN, RESULT_SCREEN[0], RESULT_SCREEN[1], RESULT_SCREEN[2]];

// Клавиатурные коды
const LEFT_KEY_CODE = 37;
const RIGHT_KEY_CODE = 39;

// Функция выводов экранов
const renderScreen = () => {
  const RENDER_TEMPLATE = GAME_SCREENS[counter].cloneNode(true);
  const MAIN_SECTION = document.querySelector(`.main`);

  APP_SECTION.replaceChild(RENDER_TEMPLATE, MAIN_SECTION);
};

const getNextScreenNumber = (count, current) => {
  const next = current % count;
  return next + (next < 0 ? count : 0);
};

// Счетчик
let counter = 0;

// Функция отработки событий и смены экранов
const CONTROL_KEY_HANDLER = (evt) => {
    if (evt.altKey && LEFT_KEY_CODE) {
      evt.preventDefault();
      renderScreen();
    }
  //   case (evt.altKey && RIGHT_KEY_CODE):
  //     evt.preventDefault();
  //     if (counter === GAME_SCREENS.length - 1) {
  //       break;
  //     }
  //     counter += 1;
  //     renderScreen();
  //     break;
  // }
};

renderScreen();
document.addEventListener(`keydown`, CONTROL_KEY_HANDLER);
