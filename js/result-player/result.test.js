import {assert} from 'chai';
import resultPlayer, {attemptFail, timeFail, getWinMessage} from './result';

describe(`Вывод результата игрока`, () => {

  let answer = {
    time: 0,
    answers: []
  };

  it(`Затрачиваемое время превысило максимальное`, () => {
    answer = {
      time: 315,
      answers: [35, 35, 30, 35, 30, 30, 30, 30, 30, 30]
    };
    assert.strictEqual(resultPlayer(answer), timeFail);
  });

  it(`Совершенно три ошибки`, () => {
    answer = {
      time: 240,
      answers: [-1, -1, -1, 30, 30, 30, 30, 30, 30, 30]
    };
    assert.strictEqual(resultPlayer(answer), attemptFail);
  });

  it(`Получает результат`, () => {
    answer = {
      time: 300,
      answers: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
    };
    assert.strictEqual(resultPlayer(answer, [2, 3, 5, 12]), getWinMessage(2, 5, 60));
  });
});
