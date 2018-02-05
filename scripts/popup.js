// Initialise DOM
const grayBackground = document.createElement('div');
document.body.appendChild(grayBackground);
const exitButton = document.createElement('span');
exitButton.innerHTML = '&Cross;';
exitButton.className = 'exit-button';

// Initialise popup functions
const popup = (function () {
    const popupWindow = document.createElement('div');
    popupWindow.className = 'popup-window';
    popupWindow.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    return {
        center: function () {
            let top = Math.max((grayBackground.offsetHeight - popupWindow.offsetHeight) / 2, 0);
            let left = Math.max((grayBackground.offsetWidth - popupWindow.offsetWidth) / 2, 0);
            popupWindow.style.top = top + 'px';
            popupWindow.style.left = left + 'px';
        },
        open: function (parameter) {
            popupWindow.appendChild(parameter);
            popupWindow.appendChild(exitButton);

            grayBackground.className = 'gray-background';
            grayBackground.appendChild(popupWindow);
            popup.center();
            window.addEventListener('resize', popup.center(), true);
        },
        close: function () {
            function closeFinisher() {
                popupWindow.innerHTML = '';
                grayBackground.removeChild(popupWindow);
                grayBackground.className = '';
            }

            grayBackground.className += ' zoomOut';
            setTimeout(closeFinisher, 300);
        }
    }
}());

// Event listeners
grayBackground.onclick = popup.close;
exitButton.onclick = popup.close;

// Array with popup articles
const articles = ['agenda', 'chessgame', 'fanstille', 'maanroosvis', 'rekenspel', 'fotogallerij', 'hallowereld'];
let buttons = [];
let contents = [];
for (let i = 0; i < articles.length; i++) {
    contents[i] = document.getElementById('content_' + articles[i]);
    buttons[i] = document.getElementById('article_' + articles[i]);
    contents[i].parentNode.removeChild(contents[i]);
    buttons[i].addEventListener('click', function () {
        popup.open(contents[i]);
    });
}

// Sizing the thumbnails
window.onresize = () => { resizeArticles(calculateViewport())};

function calculateViewport() {
    let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    switch (true) {
        case w >= 2160:
            return 212;
        case w >= 1440:
            return 132;
        case w >= 1200:
            return 151;
        case w >= 992:
            return 121;
        case w >= 768:
            return 144;
        default:
            articles.forEach(element => {
                let image = document.querySelector(".image--from-" + element);
                image.style.margin = "0";
            });
            break;
    }
}

// Adding the padding to the images
function resizeArticles(size) {
    articles.forEach(element => {
        let image = document.querySelector(".image--from-" + element);
        let margin = (size - image.height) / 2;
        image.style.margin = margin + "px 0";
    });
}

addEventListener("load", resizeArticles(calculateViewport()));
resizeArticles(calculateViewport());