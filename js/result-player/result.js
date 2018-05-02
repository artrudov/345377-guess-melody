import scoring from "../scoring/score";
import {gameRules} from "../data/game-data";


const sortArray = (a, b) => {
  return b - a;
};

export const timeFail = `Время вышло! Вы не успели отгадать все мелодии`;
export const attemptFail = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
export const getWinMessage = (position, statistics, percent) => {
  return `Вы заняли ${position} место из ${statistics}. Это лучше, чем у ${percent}% игроков`;
};

export default (answer, statistics) => {
  const gameStats = statistics.map((item) => scoring(item.answers));

  let failAnswers = answer.answers.filter((item) => item === -1).length;

  if (answer.time > gameRules.MAX_TIME) {
    return timeFail;
  }

  if (failAnswers > gameRules.AMOUNT_FAIL) {
    return attemptFail;
  }

  const score = scoring(answer.answers);

  gameStats.push(score);
  gameStats.sort(sortArray);
  let playerPosition = gameStats.indexOf(score) + 1;
  let successPercent = Math.floor(((gameStats.length - playerPosition) / gameStats.length) * 100);

  return getWinMessage(playerPosition, gameStats.length, successPercent);
};
