import { left } from './move.js';

let img = new Image();

let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");

function Img() {
    img.src = './bac.jpg';

    img.onload = () => {
        context.drawImage(img, 0, 0, 5000, 550)
    }
}
function startgame(){
    canvas.width = 5000;
    canvas.height = 600;

    context.beginPath();
    context.moveTo(0, 600);
    context.lineTo(5000, 600);
    context.lineWidth = 100;
    context.closePath();
    context.strokeStyle = '#10a100';
    context.stroke()
    Img()
}



let person = {
    x: 20,
    y: 100,
    hp: 100,
    glass: 0
};

left();
startgame();