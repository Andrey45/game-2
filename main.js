import { left, right } from './move.js';

let img = new Image();
let personImg = new  Image();
let backgroundOffset;
let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");

function Img() {
    img.src = './background-2.jpg';

    img.onload = () => {
        context.drawImage(img, 0, 0, img.width, img.height)
    }
}
function setBackgroundOffset() {
    var offset = backgroundOffset + 10;

    if (offset > 0 && offset < img.width) {
        backgroundOffset = offset;
    }
    else {
        backgroundOffset = 0;
    }
}
function personInit() {

    personImg.src = person.img;

    personImg.onload = () => {
        console.log(person.x);
        //if (person.x >= img.width/2 || person.x === img.width/2){
            context.translate(-backgroundOffset, 0);
            context.drawImage(img, 0, 0);
            context.drawImage(img, img.width, 0);
            context.translate(backgroundOffset, 0);
            context.drawImage(personImg, position(),person.y, 150, 150)
        // } else {
        //     context.drawImage(img, 0, 0, img.width, img.height)
        //     context.drawImage(personImg, person.x,person.y, 150, 150)
        // }
    }
}

function startgame(){
    Img();
    canvas.width = img.width;
    canvas.height = img.height;
    personInit();
}
function position() {
    if(person.x < 400){
        return person.x
    } else {
        return 400
    }
}
export function moveLeft(x){
    person.x = x;
    context.save()
    setBackgroundOffset()
    personInit()
    context.restore()
}

let person = {
    x: 20,
    y: 400,
    hp: 100,
    glass: 0,
    img: './timon.png'
};

left(person)
console.log(`dddd = ${person.x}`)
right(person);
startgame();
