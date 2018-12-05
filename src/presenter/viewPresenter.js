import { getPublishers, getArticles } from './modelPresenter';
import { create, addEvent } from './../view/publisherView'

const loadPublishers = async () => {
  let publishers = await getPublishers();
  let el = create(publishers);
  addEvent(el);
}

const loadArticles = async (publisher) => {
  let articles = await getArticles(publisher);
  import(/* webpackChunkName: "Articles" */
  /* webpackMode: "lazy" */'./../view/articleView').then(Articles => {
    Articles.show(articles);
  })
}

export { loadPublishers, loadArticles };