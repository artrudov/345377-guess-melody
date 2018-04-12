import scoring from "../scoring/scoring";

const sortArray = (a, b) => {
  return b - a;
};

export default (answersArray, gameStats) => {
  const allTime = answersArray.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.time;
  }, 0);

  if (allTime > 300) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  const failAnswers = answersArray.filter((item) => item.answer === false);

  if (failAnswers.length > 2) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  const score = scoring(answersArray);

  gameStats.push(score);
  gameStats.sort(sortArray);

  let playerPosition = gameStats.indexOf(score);
  let successPercent = Math.floor(((gameStats.length - playerPosition) / gameStats.length) * 100);

  return `Вы заняли ${playerPosition} место из ${gameStats.length} игроков. Это лучше, чем у ${successPercent}% игроков`;
};
