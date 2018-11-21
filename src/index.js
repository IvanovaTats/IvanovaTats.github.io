const apiKey = '5fb7dea8d7f440b1af9b7cd7cba9640d';//"75f32e4838744d73b2a6392f4143f2e0";
const publishersUrl = 'https://newsapi.org/v2/sources'
const articlesUrl = 'https://newsapi.org/v2/top-headlines?sources='

document.addEventListener('DOMContentLoaded', generatePublishers, false);

async function generatePublishers(){
  let promise = await LoadSources(publishersUrl);
  let publishers = await promise.json();
  let el = showPublishers(publishers);
  addEventToSource(el);
}

async function LoadSources(url) {
  let req = new Request(url);
  let response = fetch(req, {
    headers: {
      'X-Api-Key': apiKey
    }
  });
  return response;
}

async function loadArticles(publisher) {
  let url = `${articlesUrl}${publisher}`;
  let promise = await LoadSources(url);
  let articles = await promise.json();
  showArticles(articles);
}

function showPublishers(obj) {
  const className = "publishers";
  let el = document.getElementById(className);
  let src = obj.sources;
  for (const source of src) {
    let str = `<div class="${className}" id="${source.id}">${source.name}</div>`;
    el.innerHTML += str;
  };
  return el;
}

function showArticles(obj) {
  const className = "articles";
  let el = document.getElementById(className);
  let src = obj[className];
  for (const source of src) {
    let str = `<a href="${source.url}" class="${className}">${source.title}</a>`;
    el.innerHTML += str;
  };
}

function addEventToSource(el) {
  const className = "publishers";
  let sources = el.getElementsByClassName(className);
  for (const [index, value] of Object.entries(sources)) {
    value.addEventListener("click", () => {
      document.getElementById("articles").innerHTML = '';
      loadArticles(value.id)
    }, false);
  };
}