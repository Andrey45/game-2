import { moveProses } from '../main.js'

import { person, spritePerson, obstacle, winWidth } from './constants.js'

let jumpLength = 300;
let moveGamp = false;
let movePersonRight = false;
let movePersonLeft = false;
let moveDovn = false;

export function move() {
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowLeft':
                movePersonLeft = true
                spritePerson.src = './assets/sprite/moveLeft.png';
                moveProses('left');
                break;
            case 'ArrowRight' :
                movePersonRight = true
                spritePerson.src = './assets/sprite/moveRight.png';
                moveProses('right');
                break;
            case 'ArrowUp' :
                moveGamp = true
                break;
            case 'ArrowDown' :
                moveDovn = true
                break
        }
    })
}
document.addEventListener('keyup', (event)=> {
    if (event.key === 'ArrowLeft'){
        moveProses('up')
        spritePerson.src = './assets/sprite/tim.png'
        movePersonLeft = false
    }
    if (event.key === 'ArrowRight'){
        moveProses('up')
        spritePerson.src = './assets/sprite/tim.png'
        movePersonRight = false
    }
})
export function moveUp() {
    // document.addEventListener('keyup', () => {
    //     spritePerson.src = './assets/sprite/tim.png';
    //     moveProses('up')
    // });
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

function draw() {
    if (person.x < obstacle.obstacle1) {
        if(movePersonLeft) {
            if(!moveDovn){
                if (person.x > 0){
                    person.x -= 1;
                }
                person.x > winWidth ? obstacleMove('ArrowLeft') : '';
            }
        }
        if(movePersonRight) {
            if(!moveDovn){
                person.x += 1;
                person.x > winWidth ? obstacleMove('ArrowRight') : '';
            }
        }
    }
    if(moveGamp){
        if(moveDovn){
            person.y = 400;
            moveDovn = false;
            moveGamp = false;
        } else {
            person.y -= 2;
            person.jumpHeight = 4 * jumpLength * Math.sin(Math.PI * person.y * jumpLength);
            if (person.y < jumpLength) {
                person.y = 400;
                moveGamp = false;
                person.jumpHeight = 0;
            }
        }
    }
    if(moveDovn){
        person.y = 800
    }
}
setInterval(draw, 5);