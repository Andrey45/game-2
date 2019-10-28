import { move, moveUp } from './js/move.js';
import { img, person, canvas, context, spritePerson, winWidth, obstacle, moveState } from  './js/constants.js'

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
    personX(){
        for (let item in obstacle){
            if(person.x < winWidth){
                if(person.x >= obstacle[item] - frame){
                    this.move(false);
                    return obstacle[item] - frame;
                } else {
                    this.move(true);
                    return person.x
                }
            } else if (person.x > winWidth){
                this.move(true);
                if(person.x >= obstacle[item] - frame){
                    this.move(false);
                    return obstacle[item] - frame;
                } else {
                    this.move(true);
                    return winWidth
                }
            }
        }
    }
    move(move){
        let backgroundOffset = (person.x > 0 && person.x < img.width) ? (person.x > winWidth ? winWidth : person.x) : 0;
        if(move && moveState.state !== 'stop'){
            context.translate(-backgroundOffset, 0);
            context.drawImage(img, 0, 0);
            context.drawImage(img, img.width, 0);
            for (let item in obstacle){
                context.fillRect(obstacle[item], 490, 100, 100);
            }
            context.styleSheets = '#964b00';
            context.translate(backgroundOffset, 0);
        } else if(move){
            context.translate(-backgroundOffset, 0);
            context.drawImage(img, 0, 0);
            context.drawImage(img, img.width, 0);
            for (let item in obstacle){
                context.fillRect(obstacle[item], 490, 100, 100);
            }
            context.styleSheets = '#964b00';
            context.translate(backgroundOffset, 0);
        } else if (moveState.state === 'stop'){
            context.drawImage(img, 0, 0);
            context.drawImage(img, img.width, 0);
            for (let item in obstacle){
                context.fillRect(obstacle[item], 490, 100, 100);
            }
            context.styleSheets = '#964b00';
        }
    }
    render() {
        this.personX()
        context.drawImage(img, 0, 0);
        context.drawImage(img, img.width, 0);
        for (let item in obstacle){
            context.fillRect(obstacle[item], 490, 100, 100);
        }
        console.log(person.y)
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
