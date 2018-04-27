export const gameRules = {
  AMOUNT_FAIL: 2,
  MAX_TIME: 300,
  LIVES: 3,
  MAX_LEVEL: 10
};

export const PLAYER_STAT = {
  mistakes: 0,
  level: 0,
  lives: 3,
  time: gameRules.MAX_TIME,
  answers: [],
  statistics: [7, 8, 12, 15]
};

export const changeLevel = (game, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Уровен должен быть числом`);
  }

  if (level < 0) {
    throw new Error(`Уровень не может быть отрицательным числом`);
  }

  return Object.assign({}, game, {
    level
  });
};

export const canContinue = (game) => game.mistakes < game.lives;

export const die = (game) => {
  const mistakes = game.mistakes + 1;

  return Object.assign({}, game, {
    mistakes
  });
};
