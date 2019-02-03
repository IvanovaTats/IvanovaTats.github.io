import { urlProxy } from '../utilities/urlProxy';

const getArticles = async (publisher) => {
  try {
    const promise = await urlProxy('article', publisher);
    const articles = promise.json();

    if (articles.status === 'error') {
      throw articles;
    }
    return articles;
  } catch (e) {
    const err = await import(/* webpackChunkName: "errHandler" */
      /* webpackMode: "lazy" */'../utilities/errorHandler',
    );
    err.default.raiseAlert('Failed to load articles');
    const articles = [];
  }
};

const loadArticles = async (publisher) => {
  const articles = await getArticles(publisher);
  import(/* webpackChunkName: "Articles" */
  /* webpackMode: "lazy" */'./articleView',
  ).then((Articles) => {
    Articles.show(articles);
  });
};

export { loadArticles };
