// Главный экран приложения
const appSection = document.querySelector(`.app`);

// Секция с копирайтами
const copyrightSection = document.querySelector(`.copyright`);

// Выборка шаблонов
const template = document.querySelector(`template`);
const welcomeScreen = template.content.querySelector(`.main--welcome`);
const genreScreen = template.content.querySelector(`.main--level-genre`);
const artistScreen = template.content.querySelector(`.main--level-artist`);
const resultScreen = template.content.querySelectorAll(`.main--result`);
const resultWin = resultScreen[0];
const resultTimeout = resultScreen[1];
const resultAttempt = resultScreen[2];

// Массив экранов
const gameScreens = [welcomeScreen, genreScreen, artistScreen, resultWin, resultTimeout, resultAttempt];

// Клавиатурные коды
const leftKeyCode = 37;
const rightKeyCode = 39;

// Функция выводов экранов
const renderScreen = () => {
  const renderTemplate = gameScreens[counter].cloneNode(true);
  const mainSection = document.querySelector(`.main`);

  appSection.removeChild(mainSection);
  appSection.insertBefore(renderTemplate, copyrightSection);
};

// Функция отработки событий и смены экранов
const keyHandler = (event) => {
  switch (event.keyCode) {
    case (event.altKey && leftKeyCode):
      event.preventDefault();
      if (counter <= 0) {
        break;
      }
      counter -= 1;
      renderScreen();
      break;
    case (event.altKey && rightKeyCode):
      event.preventDefault();
      if (counter === gameScreens.length - 1) {
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
document.addEventListener(`keydown`, keyHandler);
