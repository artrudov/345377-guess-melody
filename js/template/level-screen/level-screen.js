import artristScreen from './artist-screen';
import genreScreen from './genre-screen';
import {app, changeView} from "../../utils/utils";
import {playerStat, questions} from "../../data/game-data";
import resultScreen from '../result-screens/result-screen';

const renderGameLevel = (data) => {
  if (playerStat.question > 9) {
    app.removeChild(app.children[0]);
    return changeView(resultScreen(`win`, playerStat));
  }

  if (playerStat.mistakes > 2) {
    app.removeChild(app.children[0]);
    return changeView(resultScreen(`mistake`));
  }

  if (data.type === `artist`) {
    return app.replaceChild(artristScreen(data), app.children[1]);
  } else {
    return app.replaceChild(genreScreen(data), app.children[1]);
  }
};

export default () => {
  return renderGameLevel(questions[playerStat.question]);
};
