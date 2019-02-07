import { authenticate } from '../model/apiClient';

const url = 'http://localhost:3000/users/login';

const userAuthenticate = async (username, password) => {
  try {
    const data = JSON.stringify({ username: username, password: password });
    const promise = await authenticate(url, data);
    const user = promise.json();

    if (user.status === 'error') {
      throw user;
    }
    return user;
  } catch (e) {
    const err = await import(/* webpackChunkName: "errHandler" */
      /* webpackMode: "lazy" */'../utilities/errorHandler',
    );
    err.default.raiseAlert('failed to authenticate');
  }
};

export { userAuthenticate };
