import { left, right } from './move.js';

let img = new Image();
img.src = './bac.jpg';


let backgroundOffset;
let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");

let frame = 190;

class Sprite {
    constructor(options) {
        this.ctx = options.ctx;

        this.image = options.image;

        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = options.ticksPerFrame || 0;
        this.numberOfFrames = options.numberOfFrames || 1;

        this.width = options.width;
        this.height = options.height;

        this.start();
    }

    update() {
        this.tickCount++;

        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;
            if (this.frameIndex < this.numberOfFrames - 1) {
                this.frameIndex++;
            } else {
                this.frameIndex = 0;
            }
        }
    }

    render() {
        console.log(backgroundOffset)
        context.translate(-backgroundOffset, 0);
        context.drawImage(img, 0, 0);
        context.drawImage(img, img.width, 0);
        context.translate(backgroundOffset, 0);
        this.ctx.drawImage(this.image, this.frameIndex * frame, 0, frame, this.height, position(), person.y, frame, this.height)
    }

    start() {
        let loop = () => {
            this.update();
            this.render();

            window.requestAnimationFrame(loop);
        }

        window.requestAnimationFrame(loop);
    }
}

let coinImage = new Image();
coinImage.src = './tim.png';

let sprite = new Sprite({
    ctx: canvas.getContext('2d'),
    image: coinImage,
    width: coinImage.width,
    height: coinImage.height,
    numberOfFrames: 10,
    ticksPerFrame: 4,
});

function setBackgroundOffset(move) {
    let offset;
    switch (move) {
        case 'right' :
            offset = backgroundOffset + 100;
            (offset > 0 && offset < img.width) ? backgroundOffset = offset : backgroundOffset = 0;
            break
        case 'left' :
            offset = backgroundOffset - 100;
            (offset > 0 && offset < img.width) ? backgroundOffset = offset : backgroundOffset = 0;
            break
    }
}
document.addEventListener('keyup', () => {
    frame = 190;
    coinImage.src = './tim.png'
});
function startgame(){
    canvas.width = img.width;
    canvas.height = img.height;
}
function position() {
    if(person.x < window.innerWidth/2-80){
        return person.x
    } else {
        return window.innerWidth/2-80
    }
}
export function moveLeft(x){
    person.x = x;
    coinImage.src = './moveLeft.png';
    setBackgroundOffset('left');
}
export function moveRight(x){
    person.x = x;
    frame = 200;
    coinImage.src = './moveRight.png';
    setBackgroundOffset('right');
}
let person = {
    x: 20,
    y: 400,
    hp: 100,
    glass: 0,
    img: './timon.png'
};

left(person);
right(person);
startgame();
