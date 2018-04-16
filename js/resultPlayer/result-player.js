import scoring from "../scoring/scoring";

const MAX_TIME = 300;
const AMOUNT_FAIL = 2;

const sortArray = (a, b) => {
  return b - a;

};

export const timeFail = `Время вышло! Вы не успели отгадать все мелодии`;
export const attemptFail = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
export const getWinMessage = (position, statistics, percent) => {
  return `Вы заняли ${position} место из ${statistics} игроков. Это лучше, чем у ${percent}% игроков`;
};


export default (answersArray, statistics) => {
  const gameStats = statistics;

  let failAnswers = 0;

  const allTime = answersArray.reduce((previousValue, currentValue) => {
    if (currentValue.answer === false) {
      failAnswers += 1;
      return previousValue + currentValue.time;
    } else {
      return previousValue + currentValue.time;
    }
  }, 0);

  if (allTime > MAX_TIME) {
    return timeFail;
  }

  if (failAnswers > AMOUNT_FAIL) {
    return attemptFail;
  }

  const score = scoring(answersArray);

  gameStats.push(score);
  gameStats.sort(sortArray);

  let playerPosition = gameStats.indexOf(score);
  let successPercent = Math.floor(((gameStats.length - playerPosition) / gameStats.length) * 100);

  return getWinMessage(playerPosition, gameStats.length, successPercent);
};
