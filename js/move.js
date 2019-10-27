import { moveProses } from '../main.js'
import { person, spritePerson, obstacle, winWidth } from './constants.js'
export function move() {
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowLeft':
                position(event.key);
                spritePerson.src = './assets/sprite/moveLeft.png';
                moveProses('left');
                break;
            case 'ArrowRight' :
                position(event.key);
                spritePerson.src = './assets/sprite/moveRight.png';
                moveProses('right');
                break;
        }
    })
}
export function moveUp() {
    document.addEventListener('keyup', () => {
        spritePerson.src = './assets/sprite/tim.png';
        moveProses('up')
    });
}
export function position(move) {
        if (person.x < obstacle.obstacle1) {
            console.log(person.x)
            switch (move) {
                case 'ArrowLeft' :
                    person.x -= 1;
                    person.x > winWidth ? obstacleMove(move) : '';
                    break;
                case 'ArrowRight' :
                    person.x += 1;
                    person.x > winWidth ? obstacleMove(move) : '';
                    break;
            }
        }
}
export function obstacleMove(move) {
    switch (move) {
        case 'ArrowLeft':
            for (let item in obstacle) { obstacle[item] -=10; }
            break;
        case 'ArrowRight' :
            for (let item in obstacle) { obstacle[item] +=10; }
            break;
    }
}