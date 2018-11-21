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
  //let req = new Request(url);
  let response = fetch(url, {
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

function showPublishers({sources,...rest} = obj) {
  const className = "publishers";
  let el = document.getElementById(className);
  for (const source of sources) {
    let str = `<div class="${className}" id="${source.id}">${source.name}</div>`;
    el.innerHTML += str;
  };
  return el;
}

function showArticles({articles,...rest}= obj) {
  const className = "articles";
  let el = document.getElementById(className);
  for (const art of articles) {
    let str = `<a href="${art.url}" class="${className}">${art.title}</a>`;
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