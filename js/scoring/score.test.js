import {assert} from 'chai';
import getScore from "./score";

describe(`Подсчет очков`, () => {

  const getArray = (arrayLength, timeAnswer, range) => {
    let answers = new Array(arrayLength);
    let trueAnswer = {answer: true, time: timeAnswer};
    let failAnswer = {answer: false, time: timeAnswer};
    answers.fill(trueAnswer, 0, range);
    answers.fill(failAnswer, range);
    return answers;
  };

  let answersArray = [];

  it(`Игрок ответил на 9 вопросов из 10`, () => {
    answersArray = getArray(8);
    assert.equal(getScore(answersArray), -1);
  });

  it(`Игрок ответил на все вопросы правильно`, () => {
    answersArray = getArray(10, 30, 10);
    assert.equal(getScore(answersArray), 10);
  });

  it(`Игрок ответил на все вопросы и совершил одну ошибку`, () => {
    answersArray = getArray(10, 30, 9);
    assert.equal(getScore(answersArray), 7);
  });

  it(`Игрок ответил на все вопросы и совершил две ошибки`, () => {
    answersArray = getArray(10, 30, 8);
    assert.equal(getScore(answersArray), 4);
  });

  it(`Игрок отвечал на каждый вопрос менее 30 секунд, все ответы верные`, () => {
    answersArray = getArray(10, 29, 10);
    assert.equal(getScore(answersArray), 20);
  });

  it(`Игрок отвечал на каждый вопрос менее 30 секунд, и совершил одну ошибку`, () => {
    answersArray = getArray(10, 29, 9);
    assert.equal(getScore(answersArray), 16);
  });

  it(`Игрок отвечал на каждый вопрос менее 30 секунд, и совершил две ошибки`, () => {
    answersArray = getArray(10, 29, 8);
    assert.equal(getScore(answersArray), 12);
  });

  it(`Игрок ответил на десять вопрос, не совершил ни одной ошибки и на два уложился в 30-и секундный интервал`, () => {
    answersArray = getArray(10, 30, 8);
    answersArray[8] = {answer: true, time: 20};
    answersArray[9] = {answer: true, time: 20};
    assert.equal(getScore(answersArray), 12);
  });
});

