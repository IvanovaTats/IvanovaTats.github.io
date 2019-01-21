import { getPromise } from './loadFactory';

let handler = {
  apply: function (target, thisArg, argumentsList) {
    console.log(`Function call with parameters: ${argumentsList}`);
    return target.apply(thisArg, argumentsList);
  }
}

let urlProxy = new Proxy(getPromise,handler);
export { urlProxy }