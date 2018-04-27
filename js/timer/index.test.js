import {assert} from 'chai';
import timer from './index';

describe(`Функция таймера`, () => {

  let timerForTest = {};

  let getTimer = (time)=> {
    let tempTimer = timer(300);
    for (let i = 0; i < time; i++) {
      tempTimer.tick();
    }

    return tempTimer;
  };

  it(`Запуск таймера`, () => {
    timerForTest = getTimer(0);
    assert.equal(timerForTest.time, 300);
  });

  it(`Уменьшаем время на 1 секунду`, () => {
    timerForTest = getTimer(1);
    assert.equal(timerForTest.time, 299);
  });

  it(`Уменьшаем время на 100 секунд`, () => {
    timerForTest = getTimer(100);
    assert.equal(timerForTest.time, 200);
  });

  it(`Уменьшаем время на 300 секунд`, () => {
    timerForTest = getTimer(300);
    assert.equal(timerForTest.time, 0);
  });

  it(`Время превысило допустимиые 300`, () => {
    timerForTest = getTimer(301);
    assert.equal(timerForTest.time, 0);
  });
});
