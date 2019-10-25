import { move, moveUp } from './js/move.js';
import { img, person, canvas, context, spritePerson, winWidth } from  './js/constants.js'

let frame = 190;

class Sprite {
    constructor(options) {
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = options.ticksPerFrame || 0;
        this.numberOfFrames = options.numberOfFrames || 1;
        this.start();
    }
    update() {
        this.tickCount++;
        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;

            (this.frameIndex < this.numberOfFrames - 1) ? this.frameIndex++ : this.frameIndex = 0;
        }
    }
    render() {
        let backgroundOffset = (person.x > 0 && person.x < img.width) ? person.x : 0;
        context.translate(-backgroundOffset, 0);
        context.drawImage(img, 0, 0);
        context.drawImage(img, img.width, 0);
        context.translate(backgroundOffset, 0);
        context.drawImage(spritePerson, this.frameIndex * frame, 0, frame, spritePerson.height, person.x < winWidth ? person.x : winWidth, person.y, frame, spritePerson.height)
    }
    start() {
        let loop = () => {
            this.update();
            this.render();
            window.requestAnimationFrame(loop);
        };
        window.requestAnimationFrame(loop);
    }
}

let sprite = new Sprite({
    numberOfFrames: 10,
    ticksPerFrame: 4,
});

export function moveProses(move) {
    switch (move) {
        case 'right' :
            frame = 200;
            break;
        case 'left' :
            frame = 189;
            break;
        case 'up' :
            frame = 190;
            break
    }
}

move();
moveUp();
