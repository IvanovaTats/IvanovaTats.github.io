import ApiClient from './ApiClient.js';

export function showNewElements(obj, className) {
    let el = document.getElementById(className);
    let src = obj[className];
    for (const source of src) {
        let str = `<div class="${className}" id="${source.id}">${source.name}</div>`;
        el.innerHTML += str;
    });
    return el;
}

export function showArticles(obj, className) {
    let el = document.getElementById(className);
    let src = obj[className];
    for (const source of src) {
        let str = `<a href="${source.url}" class="${className}">${source.title}</a>`;
        el.innerHTML += str;
    });
}

export function addEventListenerByClassName(el, className) {
    let sources = el.getElementsByClassName(className);
    for (const [index, value] of sources.entries()) {
        let el = sources[i];
        el.addEventListener("click", () => {
            document.getElementById("articles").innerHTML = '';
            new ApiClient().loadNewsBySource(el.id)
        }, false);
    };
}
