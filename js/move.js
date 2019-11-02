import { moveProses } from '../main.js'

import { person, spritePerson, obstacle, winWidth, worms } from './constants.js'

let jumpLength = 250;
let moveGamp = false;
let movePersonRight = false;
let movePersonLeft = false;
let moveDovn = false;

export function move() {
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowLeft':
                movePersonLeft = true
                spritePerson.src = person.person === 'timon' ? './assets/sprite/moveLeft.png' : './assets/sprite/moveLeftPumba.png';
                moveProses('left');
                break;
            case 'ArrowRight' :
                movePersonRight = true;
                spritePerson.src = person.person === 'timon' ? './assets/sprite/moveRight.png' : './assets/sprite/moveRightPumba.png';
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
        moveProses('up');
        spritePerson.src = person.person === 'timon' ? './assets/sprite/tim.png' : './assets/sprite/Pumba.png';
        movePersonLeft = false
    }
    if (event.key === 'ArrowRight'){
        moveProses('up');
        spritePerson.src = person.person === 'timon' ? './assets/sprite/tim.png' : './assets/sprite/Pumba.png';
        movePersonRight = false
    }
})

function draw() {
    if(movePersonLeft) {
        if(!moveDovn){
            if (person.x > 0){
                person.y  = 400;
                person.x -= 1;
            }
        }
    }
    if(movePersonRight) {
        if(!moveDovn){
            person.y  = 400;
            person.x += 1;
        }
    }
    if(moveGamp){
        if(moveDovn){
            person.y = 400;
            moveDovn = false;
            moveGamp = false;
        } else {
            person.y -= 2;
            if (person.y < jumpLength) {
                person.y  = 400;
                moveGamp = false;
            }
        }
    }
    for (let i in worms.worms){
        if (person.x > worms.worms[i].x - 100 && person.x < worms.worms[i].x + 100  && person.y < worms.worms[i].y){
            person.y = 280
            person.glass += 1;
            worms.worms[i].y = 800
        }
    }
    if(moveDovn){
        person.y = 800
    }
}
setInterval(draw, 5);