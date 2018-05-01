import AbstractView from '../AbstractView';

class ErrorView extends AbstractView {

  constructor(error) {
    super();
    this.error = error;
  }

  get template() {
    return `
      <div class="end">
        <p style="color: red">Произошла ошибка: ${this.error.message}</p>
      </div>`;
  }

}

export default ErrorView;
