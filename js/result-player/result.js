import scoring from '../scoring/score';
import {GAME_RULES} from '../data/game-data';

export const ResultMessage = {
  TIME_FAIL: `Время вышло! Вы не успели отгадать все мелодии`,
  ATTEMPT_FAIL: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`,
};

export const getWinMessage = (position, statistics, percent) => {
  return `Вы заняли ${position} место из ${statistics}. Это лучше, чем у ${percent}% игроков`;
};

const sortArray = (a, b) => {
  return b - a;
};

export default (answer, statistics) => {
  if (answer.time > GAME_RULES.maxTime) {
    return ResultMessage.TIME_FAIL;
  }

  let failAnswers = answer.answers.filter((item) => item === -1).length;

  if (failAnswers > GAME_RULES.amountFail) {
    return ResultMessage.ATTEMPT_FAIL;
  }

  const gameStats = statistics.map((item) => scoring(item.answers));

  const score = scoring(answer.answers);

  gameStats.push(score);
  gameStats.sort(sortArray);
  let playerPosition = gameStats.indexOf(score) + 1;
  let successPercent = Math.floor(((gameStats.length - playerPosition) / gameStats.length) * 100);

  return getWinMessage(playerPosition, gameStats.length, successPercent);
};

