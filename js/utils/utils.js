export const createElement = (template, classes) => {
  const outer = document.createElement(`section`);
  outer.className = `main ` + classes;
  outer.innerHTML = template;
  return outer;
};

const app = document.querySelector(`.app`);

export const changeView = (element) => {
  app.replaceChild(element, app.children[0]);
};
