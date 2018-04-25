export const gameRules = {
  AMOUNT_FAIL: 2,
  MAX_TIME: 300
};

export const playerStat = {
  mistakes: 0,
  question: 0,
  lives: 3,
  answers: [],
  statistics: [7, 8, 12, 15]
};

export const questions = [
  {
    'type': `artist`,
    'question': `Кто исполняет эту песню?`,
    'src': `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
    'answers': [
      {
        'image': {
          'url': `http://placehold.it/705x455`,
          'width': 300,
          'height': 300
        },
        'title': `Пелагея`,
        'isCorrect': false
      },
      {
        'image': {
          'url': `http://placehold.it/705x455`,
          'width': 300,
          'height': 300
        },
        'title': `Краснознамённая дивизия имени моей Бабушки`,
        'isCorrect': false
      },
      {
        'image': {
          'url': `http://placehold.it/705x455`,
          'width': 300,
          'height': 300
        },
        'title': `Кровосток`,
        'isCorrect': true
      }
    ]
  },
  {
    'type': `genre`,
    'question': `Выберите все песни в жанре R'n'B`,
    'genre': `rnb`,
    'answers': [
      {
        'src': `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        'genre': `rnb`
      },
      {
        'src': `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        'genre': `blues`
      },
      {
        'src': `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        'genre': `rock`
      },
      {
        'src': `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        'genre': `rnb`
      }
    ]
  },
  {
    'type': `genre`,
    'question': `Выберите все блюзовые песни`,
    'genre': `blues`,
    'answers': [
      {
        'src': `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        'genre': `blues`
      },
      {
        'src': `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        'genre': `pop`
      },
      {
        'src': `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        'genre': `rock`
      },
      {
        'src': `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        'genre': `rnb`
      }
    ]
  },
  {
    'type': `artist`,
    'question': `Кто исполняет эту песню?`,
    'src': `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
    'answers': [
      {
        'image': {
          'url': `http://placehold.it/705x455`,
          'width': 300,
          'height': 300
        },
        'title': `Пелагея`,
        'isCorrect': false
      },
      {
        'image': {
          'url': `http://placehold.it/705x455`,
          'width': 300,
          'height': 300
        },
        'title': `Краснознамённая дивизия имени моей Бабушки`,
        'isCorrect': false
      },
      {
        'image': {
          'url': `http://placehold.it/705x455`,
          'width': 300,
          'height': 300
        },
        'title': `Кровосток`,
        'isCorrect': true
      }
    ]
  },
  {
    'type': `genre`,
    'question': `Выберите все песни в жанре R'n'B`,
    'genre': `rnb`,
    'answers': [
      {
        'src': `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        'genre': `rnb`
      },
      {
        'src': `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        'genre': `blues`
      },
      {
        'src': `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        'genre': `rock`
      },
      {
        'src': `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        'genre': `rnb`
      }
    ]
  },
  {
    'type': `artist`,
    'question': `Кто исполняет эту песню?`,
    'src': `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    'answers': [
      {
        'image': {
          'url': `http://placehold.it/705x455`,
          'width': 300,
          'height': 300
        },
        'title': `Пелагея`,
        'isCorrect': false
      },
      {
        'image': {
          'url': `http://placehold.it/705x455`,
          'width': 300,
          'height': 300
        },
        'title': `Краснознамённая дивизия имени моей Бабушки`,
        'isCorrect': false
      },
      {
        'image': {
          'url': `http://placehold.it/705x455`,
          'width': 300,
          'height': 300
        },
        'title': `Кровосток`,
        'isCorrect': true
      }
    ]
  },
  {
    'type': `genre`,
    'question': `Выберите все блюзовые песни`,
    'genre': `blues`,
    'answers': [
      {
        'src': `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        'genre': `blues`
      },
      {
        'src': `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        'genre': `pop`
      },
      {
        'src': `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        'genre': `rock`
      },
      {
        'src': `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        'genre': `rnb`
      }
    ]
  },
  {
    'type': `artist`,
    'question': `Кто исполняет эту песню?`,
    'src': `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
    'answers': [
      {
        'image': {
          'url': `http://placehold.it/705x455`,
          'width': 300,
          'height': 300
        },
        'title': `Пелагея`,
        'isCorrect': false
      },
      {
        'image': {
          'url': `http://placehold.it/705x455`,
          'width': 300,
          'height': 300
        },
        'title': `Краснознамённая дивизия имени моей Бабушки`,
        'isCorrect': false
      },
      {
        'image': {
          'url': `http://placehold.it/705x455`,
          'width': 300,
          'height': 300
        },
        'title': `Кровосток`,
        'isCorrect': true
      }
    ]
  },
  {
    'type': `artist`,
    'question': `Кто исполняет эту песню?`,
    'src': `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
    'answers': [
      {
        'image': {
          'url': `http://placehold.it/705x455`,
          'width': 300,
          'height': 300
        },
        'title': `Пелагея`,
        'isCorrect': false
      },
      {
        'image': {
          'url': `http://placehold.it/705x455`,
          'width': 300,
          'height': 300
        },
        'title': `Краснознамённая дивизия имени моей Бабушки`,
        'isCorrect': false
      },
      {
        'image': {
          'url': `http://placehold.it/705x455`,
          'width': 300,
          'height': 300
        },
        'title': `Кровосток`,
        'isCorrect': true
      }
    ]
  },
  {
    'type': `genre`,
    'question': `Выберите все песни в жанре R'n'B`,
    'genre': `rnb`,
    'answers': [
      {
        'src': `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        'genre': `rnb`
      },
      {
        'src': `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        'genre': `blues`
      },
      {
        'src': `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        'genre': `rock`
      },
      {
        'src': `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        'genre': `rnb`
      }
    ]
  }
];
