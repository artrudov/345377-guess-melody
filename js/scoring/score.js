import {GameRules} from '../data/game-data';

const getScore = (item) => {
  if (item === -1) {
    return -2;
  }

  if (item < GameRules.QUICK_TIME) {
    return 2;
  }

  if (item >= GameRules.QUICK_TIME) {
    return 1;
  }

  return 0;
};

export default (answersArray) => {
  if (answersArray.length < GameRules.MAX_LEVEL) {
    return -1;
  }

  return answersArray.reduce((previousValue, currentValue) => {
    return previousValue + getScore(currentValue);
  }, 0);
};
