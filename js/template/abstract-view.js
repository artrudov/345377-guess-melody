const createElement = (template = ``, tagName = `div`) => {
  const outer = document.createElement(tagName);
  outer.innerHTML = template.trim();
  return outer;
};

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Нельзя создавать AbstractView`);
    }
  }

  get template() {
    throw new Error(`Требуется шаблон`);
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this._element);
    return this._element;
  }

  render() {
    return createElement(this.template);
  }

  bind() {
  }
}
