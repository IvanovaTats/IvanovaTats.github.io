import {articlesUrl} from './configuration.js';
import {LoadSources} from './apiClient.js';

  const load =  async(publisher)=>{
    let url = `${articlesUrl}${publisher}`;
    let promise = await LoadSources(url);
    let articles = await promise.json();
    show(articles);
  }

   const show = ({ articles }) =>{
    const className = "articles";
    let el = document.getElementById(className);
    for (const art of articles) {
      let str = `<a href="${art.url}" target="_blank" class="${className}">
      <img src="${art.urlToImage}" alt="${art.urlToImage}" style="width:42px;height:42px;border:0;">
      ${art.title}
      </a>`;
      el.innerHTML += str;
    };
  }

  export {load};