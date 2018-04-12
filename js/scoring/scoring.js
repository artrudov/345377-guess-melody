const getScore = (item) => {
  if (item.time < 30 && item.answer === true) {
    return 2;
  }

  if (item.time >= 30 && item.answer === true) {
    return 1;
  }

  if (item.answer === false) {
    return -2;
  }

  return 0;
};

export default (answersArray) => {
  if (answersArray.length < 10) {
    return -1;
  }

  return answersArray.reduce((previousValue, currentValue) => {
    return previousValue + getScore(currentValue);
  }, 0);
};
