export function AddElements(obj, elId) {
    let el = document.getElementById(elId);
    let src = obj.sources;
    src.forEach((source) => {
        let str = `<div class="Sources" id="${source.id}">${source.name}</div>`;
        el.innerHTML += str;
    });
}

function AddEventListenerByClassName(el, className) {
    let sources = el.getElementsByClassName(className);
    for (var i = 0; i < sources.length; i++) {
        let el = sources[i];
        el.addEventListener("click", new ApiClient().LoadNewsBySource(el.id), false);
    };
}