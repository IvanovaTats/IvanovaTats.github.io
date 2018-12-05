import { getPromise } from './loadFactory';

const get = async () => {
  try {
    let promise = await getPromise('publisher');
    let publishers = promise.json();
    
    if (publishers.status === 'error') {
      throw publishers;
    }
    return publishers;
  }
  catch (e) {
    let err = await import(/* webpackChunkName: "errHandler" */
      /* webpackMode: "lazy" */'./errorHandler');
    err.default.raiseAlert('failed to load publishers');
    let publishers = [];
  }
}

const load = async() => {
  let publishers = await get();
  let el = create(publishers);
  addEvent(el);
}

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
      import(/* webpackChunkName: "Articles" */
        /* webpackMode: "lazy" */'./articles').then(Articles => {
          var articles = Articles.load(value.id);
        })
    }, false);
  };
}

export { load };
