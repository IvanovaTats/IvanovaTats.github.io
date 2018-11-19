import ApiClient from './modules/ApiClient.js';

let apiClient = new ApiClient();

document.addEventListener('DOMContentLoaded', apiClient.LoadSources, false);
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
        }).then(response => {
            response.json().then(obj => {
                showArticles(obj);
            });
        });
    }

    LoadSources() {
        const url = `https://newsapi.org/v2/sources`;
        let req = new Request(url);
        fetch(req, {
            headers: {
                'X-Api-Key': apiKey
            }
        }).then(response => {
            response.json().then(obj => {
                let el = showSources(obj);
                addEventToSource(el);
            });
        });
    }
}
export const apiKey = "5fb7dea8d7f440b1af9b7cd7cba9640d"; //"75f32e4838744d73b2a6392f4143f2e0";
import ApiClient from './ApiClient.js';

export function showSources(obj) {
    const className = "sources";
    let el = document.getElementById(className);
    let src = obj[className];
    for (const source of src) {
        let str = `<div class="${className}" id="${source.id}">${source.name}</div>`;
        el.innerHTML += str;
    };
    return el;
}

export function showArticles(obj) {
    const className = "articles";
    let el = document.getElementById(className);
    let src = obj[className];
    for (const source of src) {
        let str = `<a href="${source.url}" class="${className}">${source.title}</a>`;
        el.innerHTML += str;
    };
}

export function addEventToSource(el) {
    const className = "sources";
    let sources = el.getElementsByClassName(className);
    for (const [index, value] of Object.entries(sources)) {
        value.addEventListener("click", () => {
            document.getElementById("articles").innerHTML = '';
            ApiClient.loadNewsBySource(value.id);
        }, false);
    };
}
