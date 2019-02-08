import { apiKey } from '../configuration';

const loadSources = async (url) => {
  const response = fetch(url, {
    headers: {
      //authorezation: 'Token' + 
      'X-Api-Key': apiKey
    },
  });
  return response;
};

const authenticate = async (url, data) => {
  const promise = await fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: data,
    method: 'POST'
  });
  return promise;
};


export { loadSources, authenticate };
