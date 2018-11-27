import { publishersUrl } from './configuration.js'
import { LoadSources } from './apiClient.js';
import Articles from './articles.js'

export default class Publishers {

  static async load() {
    let promise = await LoadSources(publishersUrl);
    let publishers = await promise.json();
    let el = this.create(publishers);
    this.addEvent(el);
  }

  static create({ sources }) {
    const className = "publishers";
    let el = document.getElementById(className);
    for (const source of sources) {
      let str = `<div class="${className}" id="${source.id}">${source.name}</div>`;
      el.innerHTML += str;
    };
    return el;
  }

  static addEvent(el) {
    const className = "publishers";
    let sources = el.getElementsByClassName(className);
    for (const [index, value] of Object.entries(sources)) {
      value.addEventListener("click", () => {
        document.getElementById("articles").innerHTML = '';
        Articles.load(value.id)
      }, false);
    };
  }
}