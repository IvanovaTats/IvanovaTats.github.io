import { urlProxy } from './urlProxy';

const get = async (publisher) => {
  try {
    let promise = await urlProxy('article', publisher);
    let articles = promise.json();
    
    if (articles.status === 'error') {
      throw articles;
    }
    return articles;
  }
  catch (e) {
    let err = await import(/* webpackChunkName: "errHandler" */
      /* webpackMode: "lazy" */'./errorHandler');
    err.default.raiseAlert('Failed to load articles');
    articles = [];
  }
}
const load = async (publisher) => {
  let articles = await get(publisher);
  show(articles);
}

const show = ({ articles }) => {
  const className = "articles";
  let el = document.getElementById(className);
  for (const art of articles) {
    let str = `<a href="${art.url}" target="_blank" class="${className}">
      <img src="${art.urlToImage}" alt="${art.urlToImage}" style="width:42px;height:42px;border:0;">
      ${art.title}
      </a>`;
    el.innerHTML += str;
  };
}

export { load };