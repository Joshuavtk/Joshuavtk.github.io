// Initialise DOM
const grayBackground = document.createElement('div');
document.body.appendChild(grayBackground);
const exitButton = document.createElement('span');
exitButton.innerHTML = '&Cross;';
exitButton.className = 'exit-button';

// Initialise popup functions
const modaal = (function () {
    const modaalWindow = document.createElement('div');
    modaalWindow.className = 'modaal-window';
    modaalWindow.addEventListener('click', function (e) {
        e.stopPropagation();
    });
    const modaalContent = document.createElement('div');
    modaalContent.className = 'modaal-content';

    return {
        centreren: function () {
            let top = Math.max((grayBackground.offsetHeight - modaalWindow.offsetHeight) / 2, 0);
            let left = Math.max((grayBackground.offsetWidth - modaalWindow.offsetWidth) / 2, 0);
            modaalWindow.style.top = top + 'px';
            modaalWindow.style.left = left + 'px';
        },
        open: function (parameter) {
            modaalContent.appendChild(parameter);
            modaalWindow.appendChild(modaalContent);
            modaalWindow.appendChild(exitButton);

            grayBackground.className = 'gray-background';
            grayBackground.appendChild(modaalWindow);
            modaal.centreren();
            window.addEventListener('resize', modaal.centreren(), true);
        },
        close: function () {
            modaalContent.innerHTML = '';
            modaalWindow.innerHTML = '';
            grayBackground.removeChild(modaalWindow);
            grayBackground.className = '';
        }
    }
}());

// Event listeners
grayBackground.addEventListener('click', modaal.close);
exitButton.addEventListener('click', modaal.close);

// Array with popup articles
const articles = ['fanstille', 'maanroosvis', 'fotogallerij', 'hallowereld'];
let knoppen = [];
let contents = [];
for (let i = 0; i < articles.length; i++) {
    contents[i] = document.getElementById('content_' + articles[i]);
    knoppen[i] = document.getElementById('article_' + articles[i]);
    contents[i].parentNode.removeChild(contents[i]);
    knoppen[i].addEventListener('click', function () {
        modaal.open(contents[i]);
    });
}