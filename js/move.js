import { moveProses } from '../main.js'
import { person, spritePerson } from './constants.js'
export function move() {
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowLeft':
                person.x -= 10;
                spritePerson.src = './assets/sprite/moveLeft.png';
                moveProses('left');
                break;
            case 'ArrowRight' :
                person.x += 10;
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