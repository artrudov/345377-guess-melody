export const GAME_RULES = {
  amountFail: 3,
  maxTime: 300,
  maxLevel: 10,
  quickTime: 30,
  secPerMin: 60,
  minutes: [`минуту`, `минуты`, `минут`],
  seconds: [`секунда`, `секунды`, `секунд`],
  mistakes: [`ошибку`, `ошибки`, `ошибок`],
  quick: [`быстрый`, `быстрых`, `быстрых`],
  points: [`балл`, `балла`, `баллов`]
};

export const PLAYER_STAT = {
  mistakes: 0,
  level: 0,
  roundStartTime: 0,
  roundEndTime: 0,
  roundTime: 0,
  lives: 3,
  time: GAME_RULES.maxTime,
  answer: {
    time: 0,
    answers: []
  },
};
