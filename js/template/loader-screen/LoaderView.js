import AbstractView from '../AbstractView';

class LoaderView extends AbstractView {

  constructor() {
    super();
  }

  get template() {
    return `
      <div class="end">
        <p style="color: red">Еще немного и вы узнаете результат</p>
      </div>`;
  }
}

export default LoaderView;
