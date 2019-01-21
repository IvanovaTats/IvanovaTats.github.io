import { urlProxy } from './../utilities/urlProxy.js';

const getArticles = async (publisher) => {
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
      /* webpackMode: "lazy" */'./../utilities/errorHandler');
    err.default.raiseAlert('Failed to load articles');
    articles = [];
  }
}
const loadArticles = async (publisher) => {
  let articles = await getArticles(publisher);
  import(/* webpackChunkName: "Articles" */
  /* webpackMode: "lazy" */'./articleView').then(Articles => {
    Articles.show(articles);
  })
}
export {loadArticles}
