import { move, moveUp } from './js/move.js';
import { img, person, canvas, context, spritePerson, winWidth, obstacle, moveState } from  './js/constants.js'

(function(){

    const secs = document.getElementById('time');
    let S = '00', M = '00';

    setInterval(function(){
        //Плюсик перед строкой преобразует его в число
        S = +S +1;
        //Если результат меньше 10, прибавляем впереди строку '0'
        if( S < 10 ) { S = '0' + S; }
        if( S === 60 ) {
            S = '00';
            //Как только секунд стало 60, добавляем +1 к минутам
            M = +M + 1;
            //Дальше то же самое, что и для секунд
            if( M < 10 ) { M = '0' + M; }
            if( M === 60 ) {
                //Как только минут стало 60, добавляем +1 к часам.
                M = '00';
            }
        }
        secs.innerText = M+':'+S
        //Тикает всё через одну функцию, раз в секунду.
    },1000);

})();

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
                if(person.x >= obstacle[item]-200){
                    this.move(false);
                    return obstacle[item]-200;
                } else {
                    this.move(true);
                    return person.x
                }
            } else if (person.x > winWidth){
                this.move(true);
                if(person.x >= obstacle[item]-200){
                    this.move(false);
                    return obstacle[item]-200;
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
            context.styleSheets = 'reg';
            context.translate(backgroundOffset, 0);
        } else if(move){
            context.translate(-backgroundOffset, 0);
            context.drawImage(img, 0, 0);
            context.drawImage(img, img.width, 0);
            for (let item in obstacle){
                context.fillRect(obstacle[item], 490, 100, 100);
            }
            context.styleSheets = 'reg';
            context.translate(backgroundOffset, 0);
        } else if (moveState.state === 'stop'){
            context.drawImage(img, 0, 0);
            context.drawImage(img, img.width, 0);
            for (let item in obstacle){
                context.fillRect(obstacle[item], 490, 100, 100);
            }
            context.styleSheets = 'reg';
        }
    }
    render() {
        context.drawImage(spritePerson, this.frameIndex * frame, 0, frame, spritePerson.height, this.personX(), person.y, frame, spritePerson.height)
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
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
let sprite = new Sprite({
    numberOfFrames: 10,
    ticksPerFrame: 4,
});

export function moveProses(move) {
    switch (move) {
        case 'right' :
            frame = 200;
            moveState.state = 'right';
            break;
        case 'left' :
            frame = 189;
            moveState.state = 'left';
            break;
        case 'up' :
            frame = 190;
            moveState.state = 'stop';
            break
    }
}

move();
moveUp();
