import { publishersUrl } from './configuration.js';
import { articlesUrl } from './configuration.js';
import { loadSources } from './apiClient.js';

const getPromise = async (type, ...rest) => {
  if (type == 'publisher') {
    let promise = await loadSources(publishersUrl);
    return promise;
  }
  if (type == 'article') {
    let publisher = rest;
    let promise = await loadSources(`${articlesUrl}${publisher}`);
    return promise;
  }
  else {
    return 'no result were return';
  }
}
export { getPromise }