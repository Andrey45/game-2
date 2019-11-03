import { moveProses } from '../main.js'

import { person, spritePerson, obstacle, winWidth, worms, giena } from './constants.js'

let jumpLength = 280;
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

let gienaStart = giena.x;
let gienaLeft = true;
let gienaRight = false;

function moveGiena() {
    if (gienaLeft){
        if (giena.x < gienaStart - 500){
            gienaRight = true
            gienaLeft = false
        }else {
            giena.x -= 1
        }
    }
    if (gienaRight){
        if (giena.x > gienaStart + 500){
            gienaRight = false
            gienaLeft = true
        } else {
            giena.x += 1
        }
    }
    console.log(giena.x)
}

function draw() {

    moveGiena()

    if(movePersonLeft) {
        if(!moveDovn){
            if (person.x > 0){
                if (!moveGamp){
                    person.y  = 400;
                }
                person.x -= 1;
            }
        }
    }
    if(movePersonRight) {
        if(!moveDovn){
            if (!moveGamp){
                person.y  = 400;
            }
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

    for(let i in obstacle){
        if(person.x > obstacle[i] - 100 && person.x < obstacle[i] + 50  && person.y < 380){
            moveGamp = false;
            person.y = 280
        }
    }
    for (let i in worms.worms){
        if (person.x > worms.worms[i].x - 100 && person.x < worms.worms[i].x + 50  && person.y < worms.worms[i].y){
            moveGamp = false;
            person.y = 280;
            person.hp += person.hp < 100 ? 5 : 0;
            person.glass += 1;
            worms.worms[i].y = -800
        }
    }

    if(moveDovn){
        person.y = 800
    }
}
setInterval(draw, 5);