import {GAME_RULES} from '../data/game-data';

const getScore = (item) => {
  if (item === -1) {
    return -2;
  }

  if (item < GAME_RULES.quickTime) {
    return 2;
  }

  if (item >= GAME_RULES.quickTime) {
    return 1;
  }

  return 0;
};

export default (answersArray) => {
  if (answersArray.length < GAME_RULES.maxLevel) {
    return -1;
  }

  return answersArray.reduce((previousValue, currentValue) => {
    return previousValue + getScore(currentValue);
  }, 0);
};
