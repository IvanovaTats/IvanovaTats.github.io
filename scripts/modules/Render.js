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
            ApiClient.loadNewsBySource(value.id)
        }, false);
    };
}
