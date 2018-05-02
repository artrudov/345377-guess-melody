export const gameRules = {
  AMOUNT_FAIL: 2,
  MAX_TIME: 300,
  MAX_LEVEL: 10,
  QUICK_TIME: 30,
  SEC_PER_MIN: 60,
  MINUTES: [`минуту`, `минуты`, `минут`],
  SECONDS: [`секунда`, `секунды`, `секунд`],
  MISTAKES: [`ошибка`, `ошибки`, `ошибок`],
  QUICK: [`быстрый`, `быстрых`, `быстрых`],
  POINTS: [`балл`, `балла`, `баллов`]
};

export const PLAYER_STAT = {
  mistakes: 0,
  level: 0,
  roundStartTime: 0,
  roundEndTime: 0,
  roundTime: 0,
  lives: 3,
  time: gameRules.MAX_TIME,
  answer: {
    time: 0,
    answers: []
  },
};
