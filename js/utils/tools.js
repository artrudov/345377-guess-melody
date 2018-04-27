export const createElement = (template = ``, tagName = `div`) => {
  const outer = document.createElement(tagName);
  outer.innerHTML = template.trim();
  return outer;
};

export const app = document.querySelector(`.app`);

export const changeView = (element) => {
  app.replaceChild(element, app.firstChild);
};

export const updateView = (parent, view) => {
  parent.innerHTML = ``;
  parent.appendChild(view.element);
};
