import { urlProxy } from './../utilities/urlProxy.js';
import { create, addEvent } from './publisherView'

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
      /* webpackMode: "lazy" */'./../utilities/errorHandler');
    err.default.raiseAlert('failed to load publishers');
    let publishers = [];
  }
}

const loadPublishers = async () => {
  let publishers = await getPublishers();
  let el = create(publishers);
  addEvent(el);
}

export {loadPublishers }