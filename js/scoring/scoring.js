const MAX_TIME = 30;
const AMOUNT_ANSWERS = 10;

const getScore = (item) => {
  if (item.time < MAX_TIME && item.answer === true) {
    return 2;
  }

  if (item.time >= MAX_TIME && item.answer === true) {
    return 1;
  }

  if (item.answer === false) {
    return -2;
  }

  return 0;
};

export default (answersArray) => {
  if (answersArray.length < AMOUNT_ANSWERS) {
    return -1;
  }

  return answersArray.reduce((previousValue, currentValue) => {
    return previousValue + getScore(currentValue);
  }, 0);
};
