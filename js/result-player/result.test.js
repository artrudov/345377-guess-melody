import {assert} from 'chai';
import resultPlayer, {ResultMessage, getWinMessage} from './result';

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
    assert.strictEqual(resultPlayer(answer), ResultMessage.TIME_FAIL);
  });

  it(`Совершенно три ошибки`, () => {
    answer = {
      time: 240,
      answers: [-1, -1, -1, 30, 30, 30, 30, 30, 30, 30]
    };
    assert.strictEqual(resultPlayer(answer), ResultMessage.ATTEMPT_FAIL);
  });

  it(`Получает результат`, () => {
    answer = {
      time: 300,
      answers: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
    };
    assert.strictEqual(resultPlayer(answer, [
      {
        time: 300,
        answers: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
      },
      {
        time: 300,
        answers: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
      },
      {
        time: 300,
        answers: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
      },
      {
        time: 300,
        answers: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
      }
    ]), getWinMessage(1, 5, 80));
  });
});
