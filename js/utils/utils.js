export const createElement = (template, classes) => {
  const outer = document.createElement(`section`);
  outer.className = `main ` + classes;
  outer.innerHTML = template;
  return outer;
};

export const app = document.querySelector(`.app`);

export const changeView = (element) => {
  app.replaceChild(element, app.children[0]);
};

export const changeLevel = (element) => {
  app.replaceChild(element, app.children[1]);
};
