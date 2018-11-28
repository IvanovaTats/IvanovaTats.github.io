import {apiKey} from './configuration.js';

export async function LoadSources(url) {
  let response = fetch(url, {
     headers: {
       'X-Api-Key': apiKey
     }
   });
   return response;
 };