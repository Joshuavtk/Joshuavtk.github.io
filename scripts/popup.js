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
            };
            grayBackground.className += ' zoomOut';
            setTimeout(closeFinisher, 300);
        }
    }
}());

// Event listeners
grayBackground.addEventListener('click', popup.close);
exitButton.addEventListener('click', popup.close);

// Array with popup articles
const articles = [ 'chessgame', 'fanstille', 'maanroosvis', 'rekenspel', 'fotogallerij', 'hallowereld'];
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