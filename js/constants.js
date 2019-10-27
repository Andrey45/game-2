// ПЕРСОНАЖ
let person = {
    x: 20,
    y: 400,
    hp: 100,
    glass: 0,
    time: 0,
    jumpHeight: 0
};

let obstacle = {
    obstacle1: Math.random() * (600 - 100) + 100,
    obstacle2: Math.random() * (1200 - 600) + 600,
    obstacle3: Math.random() * (1800 - 1200) + 1200,
    obstacle4: Math.random() * (2200 - 1800) + 1800,
    obstacle5: Math.random() * (2800 - 2200) + 2200,
    obstacle6: Math.random() * (3200 - 2800) + 2800,
    obstacle7: Math.random() * (3800 - 3200) + 3200,
    obstacle8: Math.random() * (4200 - 3800) + 3800,
    obstacle9: Math.random() * (4800 - 4200) + 4200,
    obstacle10:Math.random() * (5200 - 4800) + 4800,
};
let moveState = {state: 'stop'};
// СПРАЙТ
let spritePerson = new Image();
spritePerson.src = './assets/sprite/tim.png';
// ФОН
let img = new Image();
let winWidth = window.innerWidth/2 - 80;
img.src ='./assets/bacg.jpg';
// CANVAS
let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");

img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
}
// TIMER
export {
    img, winWidth,
    person,
    canvas, context,
    spritePerson,
    obstacle,
    moveState
}