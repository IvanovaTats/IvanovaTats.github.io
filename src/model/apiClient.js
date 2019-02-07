import { apiKey } from '../configuration';

const loadSources = async (url) => {
  const response = fetch(url, {
    headers: {
      'X-Api-Key': apiKey
    },
  });
  return response;
};

const authenticate = async (url, data) => {
  const response = fetch(url, {
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: data,
    method: 'POST'
  });
  return response;
};

export { loadSources, authenticate };
