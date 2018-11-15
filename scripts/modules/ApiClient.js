import { apiKey } from './Config.js';
import { showNewElements } from './Render.js';
import { showArticles } from './Render.js';
import { addEventListenerByClassName } from './Render.js';

export default class ApiClient {

    loadNewsBySource(source) {
        let url = `https://newsapi.org/v2/top-headlines?sources=${source}`;
        let req = new Request(url);
        fetch(req, {
            headers: {
                'X-Api-Key': apiKey
            }
        })        
            .then((response) => {
                response.json()
                    .then((obj) => {
                        return obj;
                    })
                    .then((obj) => {
                        showArticles(obj, "articles")
                    });
            })
    }

    LoadSources() {
        const url = `https://newsapi.org/v2/sources`;
        let req = new Request(url);
        fetch(req, {
            headers: {
                'X-Api-Key': apiKey
            }
        })
            .then((response) => {
                response.json()
                    .then((obj) => {
                        let el = showNewElements(obj, "sources");
                        return el;
                    })
                    .then((el) => {
                        let className = "sources";
                        addEventListenerByClassName(el, className);
                    });
            });
    }
}


