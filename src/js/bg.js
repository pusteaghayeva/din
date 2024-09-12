const body = document.body;
const fontSizeRange = document.querySelector('.font-slider__range');
const otherNews = document.querySelector('.other-news');
const allNews = document.querySelector('.all-news');
const thanksPolice = document.querySelector('.thanks-police');
const usefulInformation = document.querySelector('.useful-information');
const services = document.querySelector('.electronic-services');
const eyeIcon = document.querySelector('.eye-icon');
const signatureImg = document.querySelector('.signature-img');
const managementNews = document.querySelectorAll('.management-information');
const newsTitle = document.querySelector('.news_main_title');
let sectionsVisible = false;
document.addEventListener('DOMContentLoaded', () => {
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        body.style.backgroundColor = savedColor;
    }
    updateSections();
});

function updateSections() {
    const fontSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    const bgColor = window.getComputedStyle(document.body).backgroundColor;
    if (sectionsVisible || bgColor === 'rgb(255, 255, 255)') {
        otherNews.style.display = 'block';
        allNews.style.display = 'none';
        thanksPolice.style.display = 'block';
        usefulInformation.style.display = 'block';
        services.style.display = 'block';
        signatureImg.src = './src/img/signature.svg';

    } else if (fontSize >= 18 || bgColor === 'rgb(157, 209, 255)' || bgColor === 'rgb(0, 0, 0)') {
        otherNews.style.display = 'none';
        allNews.style.display = 'block';
        thanksPolice.style.display = 'none';
        usefulInformation.style.display = 'none';
        services.style.display = 'none';
        if (bgColor === 'rgb(0, 0, 0)') {
            signatureImg.src = './src/img/white-sign.png';
            newsTitle.style.color = "#ffff"
        } else {
            signatureImg.src = './src/img/signature.svg';
        }
        if (bgColor === 'rgb(0, 0, 0)') {
            signatureImg.src = './src/img/white-sign.png';

            managementNews.forEach(news => {
                news.style.color = '#fff';
            });
        } else {
            managementNews.forEach(news => {
                news.style.color = '#000';
            });
        }
    } else if (bgColor === 'rgb(255, 0, 0)') {
        otherNews.style.display = 'none';
        allNews.style.display = 'none';
        thanksPolice.style.display = 'none';
        usefulInformation.style.display = 'none';
        services.style.display = 'none';
    } else {
        otherNews.style.display = 'none';
        allNews.style.display = 'block';
        thanksPolice.style.display = 'none';
        usefulInformation.style.display = 'none';
        services.style.display = 'none';
        signatureImg.src = './src/img/signature.svg';
        managementNews.forEach(news => {
            news.style.color = '';
        });
    }
}

function updateFontSize() {
    const fontSize = fontSizeRange.value + 'px';
    body.style.fontSize = fontSize;

    updateSections();
}

function makeBlue() {
    body.style.backgroundColor = '#000';
    localStorage.setItem('backgroundColor', '#000');
    updateSections();
}

function makeGreen() {
    body.style.backgroundColor = '#9dd1ff';
    localStorage.setItem('backgroundColor', '#9dd1ff');
    updateSections();
}

// function makeWhite() {
//     body.style.backgroundColor = 'white';
//     updateSections(); // Görünməni yoxlayırıq
// }

function makeBlack() {
    body.style.backgroundColor = '#f6fff8';
    localStorage.setItem('backgroundColor', '#f6fff8');

    otherNews.style.display = 'none';
    allNews.style.display = 'block';
    thanksPolice.style.display = 'none';
    usefulInformation.style.display = 'none';
    services.style.display = 'none';

    updateSections();
}

function toggleSections() {
    sectionsVisible = !sectionsVisible;
    updateSections();
}

// Event handlerlər
document.querySelector('.blue').addEventListener('click', makeBlue);
document.querySelector('.green').addEventListener('click', makeGreen);
document.getElementById('reset').addEventListener('click', makeBlack);
fontSizeRange.addEventListener('input', updateFontSize);
// eyeIcon.addEventListener('click', toggleSections); // Göz iconuna klik edildikdə

updateSections();

function resetToDefault() {
    localStorage.removeItem('backgroundColor');
    body.style.backgroundColor = ''; // Və ya default rəng
    body.style.fontSize = '16px';
    otherNews.style.display = 'block';
    allNews.style.display = 'none';
    thanksPolice.style.display = 'none';
    usefulInformation.style.display = 'none';
    services.style.display = 'none';
    signatureImg.src = './src/img/signature.svg';
    managementNews.forEach(news => {
        news.style.color = '';
    });
    updateSections();
}

document.getElementById('resetLink').addEventListener('click', function (event) {
    event.preventDefault();
    resetToDefault();
});


document.getElementById('resetLink').addEventListener('click', function (event) {
    event.preventDefault();
    location.reload();
});