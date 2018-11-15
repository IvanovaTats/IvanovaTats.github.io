import apiKey from './Modules/Config.js';
import AddElements from './Modules/Render.js';

export default class ApiClient {

    LoadNewsBySource(source) {
        let url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`;
        var req = new Request(url);
        fetch(req)
            .then((response) => {
                response.json().then((obj) => {
                    return obj;
                    /*let articles = obj.articles;
                    let el = document.getElementById("articles");
                    articles.forEach((article) => {
                        let str = `<div class="articles" id="${article.id}">${article.name}</div>`;
                        el.innerHTML += str;*/
                });
            });
    }

    LoadSources() {
        console.log("https://newsapi.org/v2/sources?apiKey=5fb7dea8d7f440b1af9b7cd7cba9640d");
        const url = `https://newsapi.org/v2/sources?apiKey=${apiKey}`;
        let req = new Request(url);
        fetch(req)
            .then((response) => {
                response.json()
                    .then((obj) => {
                        let el = AddElements(obj, "sources");
                        return el;
                    })
                    .then((el) => {
                        let className = "Sources";
                        AddEventListenerByClassName(el, className);
                    });
            });
    }
}


