import { move } from './js/move.js';
import { img, person, canvas, context, spritePerson, winWidth, obstacle, moveState, wormsImg, worms, obstacleImg, giena, giena2 } from  './js/constants.js'

let imgGiena = new Image()
imgGiena.src = './assets/sprite/giena.png';
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

        if (person.x >= giena.x -10 && person.x <= giena.x + 10 || person.x >= giena2.x -10 && person.x <= giena2.x + 10){
            person.hp -= 10;
        }

        if (person.x < img.width && person.x > 0 && person.x > winWidth){
            if(person.x > winWidth && moveState.state === 'right'){ backgroundOffset += 3.2}
            else  if (moveState.state === 'left') {
                if(backgroundOffset > 0){
                    backgroundOffset -= 3.2;
                }
            }
        }
        // Если позиция игрока равна или больше длинны фона то это финишь
        moveState.state === 'right' && person.x >= img.width ? finish() : '';

        // Движение фона и объекточ на нем
        context.translate(-backgroundOffset, 0);
        context.drawImage(img, 0, 0);
        context.drawImage(img, img.width, 0);
        for (let item in obstacle){
            context.drawImage(obstacleImg, obstacle[item], 400, 200, 200);
        }
        for (let item in worms.worms){
            context.drawImage(wormsImg, worms.worms[item].x, worms.worms[item].y, 100, 100);
        }
        context.styleSheets = '#964b00';
        context.drawImage(imgGiena, giena.x, giena.y, 100, 100);
        context.drawImage(imgGiena, giena2.x, giena2.y, 100, 100);
        context.translate(backgroundOffset, 0);

        // Отрисовка персонажа отдельно от двидения фона
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
// Определение в какую сторону производитсься движение
export function moveProses(move) {
    switch (move) {
        case 'right' :
            person.person === 'timon'  ? frame = 200 : frame = 190;
            moveState.state = move;
            break;
        case 'left' :
            person.person === 'timon'  ? frame = 189 : frame = 190;
            moveState.state = move;
            break;
        case 'up' :
            person.person === 'timon'  ? frame = 190 : frame = 190;
            moveState.state = move;
            break
    }
}

move();

let store_server = [];

export function finish() {

    let result = 1000 - person.time + person.glass * 10;

    localStorage.setItem('server', JSON.stringify({
        name: localStorage.getItem('name'),
        score: result
    }));

    location.href = './endgame/index.html'
}