import DataSource from '../data/data-source.js';

const DETIK_RSS_NEWS = {
    'url': 'http://rss.detik.com/index.php/detikcom',
    'selector': '#newsContent'
};
const DETIK_NASIONAL_NEWS = {
    'url': 'http://rss.detik.com/index.php/detikcom_nasional',
    'selector': '#nasionalContent'
};
const DETIK_SEPAKBOLA_NEWS = { 
    'url': 'http://rss.detik.com/index.php/sepakbola',
    'selector': '#sepakbolaContent'
};

const addTouchListener = overlays => {
    for (let overlay of overlays) {
        console.log('add touch listener');
        overlay.addEventListener('touchstart', function () {
            this.style.opacity = "1";
        })
        overlay.addEventListener('touchend', function () {
            this.style.opacity = "0";
        })
    }
}

const main = () => {
    const overlays = document.getElementsByClassName('overlay');
    const openMenu = document.querySelector('#openMenu');
    const closeMenu = document.querySelector('#closeMenu');
    const aside = document.querySelector('aside');

    openMenu.addEventListener('click', function () {
        aside.style.left = '0';
    })
    closeMenu.addEventListener('click', function () {
        aside.style.left = '-50%';
    })
    window.addEventListener('resize', function () {
        if (document.body.clientWidth > 596) {
            aside.style.left = '0';
        } else {
            aside.style.left = '-50%';
        }
    })

    const promiseDetikRssNews = DataSource.detikNewsRss(DETIK_RSS_NEWS['url'])
        .then(article => {
            document.querySelector(DETIK_RSS_NEWS['selector']).innerHTML = article;
        })
    const promiseDetikNasionalNews = DataSource.detikNewsRss(DETIK_NASIONAL_NEWS['url'])
        .then(article => {
            document.querySelector(DETIK_NASIONAL_NEWS['selector']).innerHTML = article;
        })
    const promiseDetikSepakbolaNews = DataSource.detikNewsRss(DETIK_SEPAKBOLA_NEWS['url'])
        .then(article => {
            document.querySelector(DETIK_SEPAKBOLA_NEWS['selector']).innerHTML = article;
        })
    Promise.allSettled([
        promiseDetikRssNews,
        promiseDetikNasionalNews,
        promiseDetikSepakbolaNews
    ])
        .then(_ => {
            addTouchListener(overlays);
        });
}


export default main;