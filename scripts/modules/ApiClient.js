export default class ApiClient {

    LoadNewsBySource(source) {
        let url = 'https://newsapi.org/v2/top-headlines?' +
            'sources=bbc-news&' +
            'apiKey=75f32e4838744d73b2a6392f4143f2e0';
        var req = new Request(url);
        fetch(req)
            .then(function (response) {
                response.json().then(function (obj) {
                    let articles = obj.articles;
                    let ol = document.getElementById("articles");
                    articles.forEach(article => {
                        let li = document.createElement("li");
                        li.appendChild(document.createTextNode(article.url));
                        ol.appendChild(li);
                    });
                })
            })

    }

    LoadSources() {
        var url = 'https://newsapi.org/v2/sources?apiKey=75f32e4838744d73b2a6392f4143f2e0';
        let req = new Request(url);
        fetch(req)
            .then(function (response) {
                response.json().then(function (obj) {
                    let src = obj.sources;
                    let ul = document.getElementById("sources");
                    src.forEach(source => {
                        console.log(source);
                        let li = document.createElement("li",);
                        li.appendChild(document.createTextNode(source.name));
                        ul.appendChild(li);
                    })
                });
            })
    }
}


