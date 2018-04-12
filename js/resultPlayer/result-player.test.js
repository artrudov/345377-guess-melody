import {assert} from 'chai';
import resultPlayer from './result-player';
import scoring from "../scoring/scoring";

describe(`Вывод результата игрока`, () => {

  const getArray = (arrayLength, timeAnswer, range) => {
    let answers = new Array(arrayLength);
    let trueAnswer = {answer: true, time: timeAnswer};
    let failAnswer = {answer: false, time: timeAnswer};
    answers.fill(trueAnswer, 0, range);
    answers.fill(failAnswer, range);
    return answers;
  };

  const sortArray = (a, b) => {
    return b - a;
  };

  let answersArray = [];

  let playerPosition = 0;
  let successProcent = 0;
  const statistics = [7, 4, 8, 12, 15, 6];

  const timeoutMessage = `Время вышло! Вы не успели отгадать все мелодии`;
  const failMessage = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  const winMessage = `Вы заняли ${playerPosition} место из ${statistics.length + 1} игроков. Это лучше, чем у ${successProcent}% игроков`;


  it(`Затрачиваемое время превысило максимальное`, () => {
    answersArray = getArray(10, 35, 10);
    assert.strictEqual(resultPlayer(answersArray), timeoutMessage);
  });

  it(`Совершенно три ошибки`, () => {
    answersArray = getArray(10, 30, 7);
    assert.strictEqual(resultPlayer(answersArray), failMessage);
  });

  it(`Получает результат`, () => {
    answersArray = getArray(10, 30, 10);

    const score = scoring(answersArray);
    statistics.push(score);
    statistics.sort(sortArray);

    playerPosition = statistics.indexOf(score);
    successProcent = Math.floor(((statistics.length - playerPosition) / statistics.length) * 100);

    assert.strictEqual(resultPlayer(answersArray), winMessage);
  });
});
