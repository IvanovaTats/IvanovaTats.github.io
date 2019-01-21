import { loadArticles } from './../articles/articleController.js'

const create = ({ sources }) => {
  const className = "publishers";
  let el = document.getElementById(className);
  for (const source of sources) {
    let str = `<div class="${className}" id="${source.id}">${source.name}</div>`;
    el.innerHTML += str;
  };
  return el;
}

const addEvent = (el) => {
  const className = "publishers";
  let sources = el.getElementsByClassName(className);
  for (const [index, value] of Object.entries(sources)) {
    value.addEventListener("click", () => {
      document.getElementById("articles").innerHTML = '';
      loadArticles(value.id);
    }, false);
  };
}

export { create, addEvent }