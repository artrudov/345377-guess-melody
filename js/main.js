import {changeView} from './utils/tools';
import Welcome from "./template/main-screen/Welcome";
import gameView from "./template/level-screen/gameView";

const welcomeScreen = new Welcome();

welcomeScreen.element.className = `main main--welcome`;
changeView(welcomeScreen.element);
welcomeScreen.onAgreeClick = () => {
  changeView(gameView);
};
