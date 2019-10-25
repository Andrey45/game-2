// ПЕРСОНАЖ
let person = {
    x: 20,
    y: 400,
    hp: 100,
    glass: 0
};
// СПРАЙТ
let spritePerson = new Image();
spritePerson.src = './assets/sprite/tim.png';
// ФОН
let img = new Image();
let winWidth = window.innerWidth/2 - 80;
img.src ='./assets/bac.jpg';
// CANVAS
let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");

canvas.width = img.width;
canvas.height = img.height;

export {
    img, winWidth,
    person,
    canvas, context,
    spritePerson
}