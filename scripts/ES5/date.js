'use strict';

var now = new Date();
document.getElementById('currYear').innerHTML = now.getFullYear();

var birthDate = new Date(2000, 1, 12);
var age = new Date(now - birthDate);
document.getElementById('myAge').innerHTML = age.getFullYear() - 1970;

var greeting = 'Hallo';
switch (true) {
    case now.getHours() >= 18:
        greeting = 'Goedenavond';
        break;
    case now.getHours() >= 12:
        greeting = 'Goedemiddag';
        break;
    case now.getHours() >= 6:
        greeting = 'Goedemorgen';
        break;
    default:
        greeting = 'Goedenacht';
        break;
}

document.getElementById('greeting').innerHTML = greeting;