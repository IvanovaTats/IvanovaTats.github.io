import { urlProxy } from '../utilities/urlProxy';
import { create, addEvent } from './publisherView';

const getPublishers = async () => {
  try {
    const promise = await urlProxy('publisher');
    const publishers = promise.json();

    if (publishers.status === 'error') {
      throw publishers;
    }
    return publishers;
  } catch (e) {
    const err = await import(/* webpackChunkName: "errHandler" */
      /* webpackMode: "lazy" */'../utilities/errorHandler',
    );
    err.default.raiseAlert('failed to load publishers');
  }
};

const loadPublishers = async () => {
  const publishers = await getPublishers();
  const el = create(publishers);
  addEvent(el);
};

export { loadPublishers };
