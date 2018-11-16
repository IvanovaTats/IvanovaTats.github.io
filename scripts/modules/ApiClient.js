import { apiKey } from './Config.js';
import { showSources } from './Render.js';
import { showArticles } from './Render.js';
import { addEventToSource } from './Render.js';

export default class ApiClient {

    static loadNewsBySource(source) {
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
                        showArticles(obj);
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
                        let el = showSources(obj);
                        addEventToSource(el);
                    });
            });
    }
}


