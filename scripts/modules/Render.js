import ApiClient from './ApiClient.js';

export function showNewElements(obj, className) {
    let el = document.getElementById(className);
    let src = obj[className];
    src.forEach((source) => {
        let str = `<div class="${className}" id="${source.id}">${source.name}</div>`;
        el.innerHTML += str;
    });
    return el;
}

export function showArticles(obj, className) {
    let el = document.getElementById(className);
    let src = obj[className];
    src.forEach((source) => {
        let str = `<a href="${source.url}" class="${className}">${source.title}</a>`;
        el.innerHTML += str;
    });
}

export function addEventListenerByClassName(el, className) {
    let sources = el.getElementsByClassName(className);
    for (var i = 0; i < sources.length; i++) {
        let el = sources[i];
        el.addEventListener("click", () => {
            document.getElementById("articles").innerHTML = '';
            new ApiClient().loadNewsBySource(el.id)
        }, false);
    };
}