import {apiKey} from './../configuration';

const loadSources = async (url) => {
  let response = fetch(url, {
     headers: {
       'X-Api-Key': apiKey
     }
   });
   return response;
 };
export {loadSources}