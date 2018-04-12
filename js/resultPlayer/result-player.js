// import scoring from "../scoring/scoring";


const timeoutMessage = `Время вышло! Вы не успели отгадать все мелодии`;
const failMessage = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
const winMessage = `Вы заняли i место из t игроков. Это лучше, чем у n% игроков`;


export default (answersArray) => {
  const score = scoring(answersArray);

  const allTime = answersArray.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.time;
  }, 0);

  const failAnswers = answersArray.filter((item) => item.answer === false);

  if (allTime > 300) {
    return timeoutMessage;
  }

  if (failAnswers.length > 2) {
    return failMessage;
  }



  return winMessage;
};
