import { moveLeft, moveRight } from './main.js'
export function left(person) {
    document.addEventListener('keydown', (event) => {
        event.key === 'ArrowLeft' ? moveLeft(person.x -=10) : '';
    });
}
export function right(person) {
    document.addEventListener('keydown', (event) =>{
        event.key === 'ArrowRight' ? moveRight(person.x +=10) : '';
    });
}