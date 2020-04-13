import { move } from './move.js';
import { img, person, canvas, context, spritePerson, winWidth,objects, moveState, wormsImg, worms, obstacleImg, giens } from  '../../constants/constants.js'

let imgGiena = new Image();
imgGiena.src = '../../assets/sprite/giena.png';

let frame = 190;

let backgroundOffset = 0;

class Sprite {
    constructor(props){
        this.state = {
            tickCount: 0,
            frameIndex: 0,
            ticksPerFrame: props.ticksPerFrame || 0,
            numberOfFrames: props.numberOfFrames || 1
        };

        this.start();
    }
    update() {
        let { tickCount, ticksPerFrame, frameIndex, numberOfFrames,  } = this.state;

        this.state.tickCount++;

        if (tickCount > ticksPerFrame) {

            this.state.tickCount = 0;

            (frameIndex < numberOfFrames - 1) ? this.state.frameIndex++ : this.state.frameIndex = 0;
        }
    }

    render() {

        let {frameIndex} = this.state;

        if (person.x >= giens[0].x -10 && person.x <= giens[0].x + 10 || person.x >= giens[1].x -10 && person.x <= giens[1].x + 10){
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

        objects.map(item => context.drawImage(obstacleImg, item, 400, 200, 200));

        worms.map(item => context.drawImage(wormsImg, item.x, item.y, 100, 100));

        giens.map(item => context.drawImage(imgGiena, item.x, item.y, 100, 100))

        context.styleSheets = '#964b00';
        context.translate(backgroundOffset, 0);
        // Отрисовка персонажа отдельно от двидения фона
        context.drawImage(spritePerson, frameIndex * frame, 0, frame, spritePerson.height, person.x < winWidth ? person.x : winWidth, person.y, frame, spritePerson.height)

    }
    start() {
        const loop = () => {
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

export function finish() {

    let result = 1000 - person.time + person.glass * 10;

    localStorage.setItem('server', JSON.stringify({
        name: localStorage.getItem('name'),
        score: result
    }));

    location.href = '../Endgame/index.html'
}
