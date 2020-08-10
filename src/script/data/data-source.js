class DataSource {
    static detikNewsRss(rssUrl) {
        return fetch(rssUrl)
            .then(response => response.text())
            .then(str => new DOMParser().parseFromString(str, "text/xml"))
            .then(data => {
                const itemList = data.querySelectorAll('item');
                let article = null;
                itemList.forEach((item) => {
                    const title = item.querySelector('title').textContent;
                    const link = item.querySelector('link').textContent;
                    const pubDate = item.querySelector('pubDate').textContent;
                    const desc = item.querySelector('description').textContent;
    
                    if (link.includes('http')) {
                        if (!article) {
                            article = '<article class="card">';
                        } else {
                            article += '<article class="card">'
                        }
                        article += `<small>${pubDate}</small>`;
                        article += `<h1>${title}</h1>`;
                        article += `<div class="overlay">
                        <a href=${link}><h4>${title}</h4>
                        <p>${desc}</p></a>
                            </div>`
                        article += '</article>';
                    }
                });
                if (article) {
                    return Promise.resolve(article);
                } else {
                    return Promise.reject('Something wrong...');
                }
            })
    }
}
export default DataSource;