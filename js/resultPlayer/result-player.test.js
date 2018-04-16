import {assert} from 'chai';
import resultPlayer, {attemptFail, timeFail, getWinMessage} from './result-player';

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
    answersArray = getArray(10, 35, 10);
    assert.strictEqual(resultPlayer(answersArray), timeFail);
  });

  it(`Совершенно три ошибки`, () => {
    answersArray = getArray(10, 30, 7);
    assert.strictEqual(resultPlayer(answersArray), attemptFail);
  });

  it(`Получает результат`, () => {
    const statistics = [7, 8, 12, 15];

    answersArray = getArray(10, 30, 10);
    assert.strictEqual(resultPlayer(answersArray, statistics), getWinMessage(2, 5, 60));
  });
});
