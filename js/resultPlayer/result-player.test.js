import {assert} from 'chai';
import resultPlayer from './result-player';

describe(`Вывод результата игрока`, () => {

  const getArray = (arrayLength, timeAnswer, range) => {
    let answers = new Array(arrayLength);
    let trueAnswer = {answer: true, time: timeAnswer};
    let failAnswer = {answer: false, time: timeAnswer};
    answers.fill(trueAnswer, 0, range);
    answers.fill(failAnswer, range);
    return answers;
  };

  let answersArray = [];

  it(`Затрачиваемое время превысило максимальное`, () => {
    const timeoutMessage = `Время вышло! Вы не успели отгадать все мелодии`;
    answersArray = getArray(10, 35, 10);
    assert.strictEqual(resultPlayer(answersArray), timeoutMessage);
  });

  it(`Совершенно три ошибки`, () => {
    const failMessage = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
    answersArray = getArray(10, 30, 7);
    assert.strictEqual(resultPlayer(answersArray), failMessage);
  });

  it(`Получает результат`, () => {
    const statistics = [7, 8, 12, 15];
    const winMessage = `Вы заняли 2 место из 5 игроков. Это лучше, чем у 60% игроков`;

    answersArray = getArray(10, 30, 10);
    assert.strictEqual(resultPlayer(answersArray, statistics), winMessage);
  });
});
