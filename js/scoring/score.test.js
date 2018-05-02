import {assert} from 'chai';
import getScore from "./score";

describe(`Подсчет очков`, () => {

  let answersArray = [];

  it(`Игрок ответил на 9 вопросов из 10`, () => {
    answersArray = [30, 30, 30, 30, 30, 30, 30, 30, 30];
    assert.equal(getScore(answersArray), -1);
  });

  it(`Игрок ответил на все вопросы правильно`, () => {
    answersArray = [30, 30, 30, 30, 30, 30, 30, 30, 30, 30];
    assert.equal(getScore(answersArray), 10);
  });

  it(`Игрок ответил на все вопросы и совершил одну ошибку`, () => {
    answersArray = [30, 30, 30, 30, -1, 30, 30, 30, 30, 30];
    assert.equal(getScore(answersArray), 7);
  });

  it(`Игрок ответил на все вопросы и совершил две ошибки`, () => {
    answersArray = [30, 30, 30, 30, -1, -1, 30, 30, 30, 30];
    assert.equal(getScore(answersArray), 4);
  });

  it(`Игрок отвечал на каждый вопрос менее 30 секунд, все ответы верные`, () => {
    answersArray = [29, 29, 29, 29, 29, 29, 29, 29, 29, 29];
    assert.equal(getScore(answersArray), 20);
  });

  it(`Игрок отвечал на каждый вопрос менее 30 секунд, и совершил одну ошибку`, () => {
    answersArray = [29, 29, 29, 29, 29, 29, 29, 29, 29, -1];
    assert.equal(getScore(answersArray), 16);
  });

  it(`Игрок отвечал на каждый вопрос менее 30 секунд, и совершил две ошибки`, () => {
    answersArray = [29, 29, 29, 29, 29, 29, 29, 29, -1, -1];
    assert.equal(getScore(answersArray), 12);
  });

  it(`Игрок ответил на десять вопрос, не совершил ни одной ошибки и на два уложился в 30-и секундный интервал`, () => {
    answersArray = [30, 29, 29, 30, 30, 30, 30, 30, 30, 30];
    assert.equal(getScore(answersArray), 12);
  });
});

