import QUESTION from '../../data/questions';
import {PLAYER_STAT, die, canContinue, changeLevel, gameRules} from '../../data/game-data';
import ArtistView from './ArtistView';
import GenreView from './GenreView';
import HeaderView from '../header/HeaderView';
import {changeView, createElement, updateView} from '../../utils/tools';
import VictoryView from '../result-screens/VictoryView';
import DieView from "../result-screens/DieView";
import {app} from "../../utils/tools";

let gameState = Object.assign({}, PLAYER_STAT);

const gameContainerElement = createElement(``);
const headerContainer = createElement(``);
headerContainer.className = `main-header`;

const levelContainer = createElement(``);
levelContainer.className = `main`;

gameContainerElement.appendChild(headerContainer);
gameContainerElement.appendChild(levelContainer);

const getLevel = () => QUESTION[gameState.level];

const getView = (View) => new View(getLevel());

const updateGame = (state) => {
  updateView(headerContainer, new HeaderView(state));
  const level = (getLevel().type === `artist`) ? getView(ArtistView) : getView(GenreView);
  level.onAnswer = onUserAnswer;
  updateView(levelContainer, level);
};

const onUserAnswer = (answer) => {
  if (answer) {
    gameState = changeLevel(gameState, gameState.level + 1);
  } else {
    gameState = die(gameState);
    gameState = changeLevel(gameState, gameState.level + 1);
  }

  if (gameState.level > gameRules.MAX_LEVEL) {
    app.removeChild(app.firstChild);
    changeView(new VictoryView(gameState).element);
  }

  if (!canContinue(gameState)) {
    app.removeChild(app.firstChild);
    changeView(new DieView().element);
  } else {
    gameState.answers.push({answer, time: 30});
    updateGame(gameState);
  }
};

updateGame(gameState);
export default gameContainerElement;
