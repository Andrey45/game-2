import { move, moveUp } from './js/move.js';
import { img, person, canvas, context, spritePerson, winWidth, obstacle, moveState } from  './js/constants.js'

let frame = 190;

let backgroundOffset = 0;

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
        if (person.x < img.width && person.x > 0){
            if(person.x > winWidth && moveState.state === 'right'){
                backgroundOffset += 5

            } else  if (moveState.state === 'left') {
                if(backgroundOffset > 0){
                    backgroundOffset -= 5;
                }
            }
        } else {
            backgroundOffset = 0
        }
        context.translate(-backgroundOffset, 0);
        context.drawImage(img, 0, 0);
        context.drawImage(img, img.width, 0);
        for (let item in obstacle){
            context.fillRect(obstacle[item], 490, 100, 100);
        }
        context.styleSheets = '#964b00';
        context.translate(backgroundOffset, 0);
        context.drawImage(spritePerson, this.frameIndex * frame, 0, frame, spritePerson.height, person.x + person.jumpHeight, person.y, frame, spritePerson.height)
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
            person.person === 'timon'  ? frame = 200 : frame = 190;
            moveState.state = 'right';
            break;
        case 'left' :
            person.person === 'timon'  ? frame = 189 : frame = 190;
            moveState.state = 'left';
            break;
        case 'up' :
            person.person === 'timon'  ? frame = 190 : frame = 190;
            moveState.state = 'stop';
            break
    }
}

move();
moveUp();
