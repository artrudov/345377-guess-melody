import playerResult from '../../result-player/result-player';
import scoring from "../../scoring/scoring";
import {createElement} from "../../utils/utils";

export default (stat) => {
  return createElement(`     
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали ${scoring(stat.answers)} баллов (0 быстрых)
      <br>совершив ${stat.mistakes} ошибки</div>
    <span class="main-comparison">${playerResult(stat.answers, stat.statistics)}</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>`, `main--result`);
};
