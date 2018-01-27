let now = new Date();
document.getElementById('currYear').innerHTML = now.getFullYear();

let birthDate = new Date(2000, 1, 12);
let age = new Date(now - birthDate);
document.getElementById('myAge').innerHTML = age.getFullYear() - 1970;

let greeting = 'Hallo';
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