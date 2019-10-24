import { moveLeft } from './main.js'

let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");

export function left(person) {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            canvas = document.getElementById("canvas");
            person.x +=10;
            // let left = canvas.style.left;
            // canvas.style.left = `${person.x}px`;
            console.log(window.innerWidth/2);
            moveLeft(person.x)
        }
    });
}
export function right(person) {
    let x;
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            canvas = document.getElementById("canvas");
            person.x +=10;
            moveLeft(person.x)
        }
    });
}

function bacRight(x) {
    // if (x >= window.innerWidth/2){
    //     canvas.style.left = `${-x}px`;
    // }
}