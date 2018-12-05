import { urlProxy } from './urlProxy';

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
      /* webpackMode: "lazy" */'./errorHandler');
    err.default.raiseAlert('Failed to load articles');
    articles = [];
  }
}

const getPublishers = async () => {
  try {
    let promise = await urlProxy('publisher');
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

export {getArticles, getPublishers}