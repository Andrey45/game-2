localStorage.setItem('name', 'ddddd');
localStorage.setItem('person', 'pumba');

// ПЕРСОНАЖ
let person = {
    x: 20,
    y: 400,
    hp: 100,
    person: localStorage.getItem('person'),
    name: localStorage.getItem('name'),
    glass: 0,
    time: 0,
    jumpHeight: 0
};

document.getElementById('name').innerText = person.name;

let obstacle = {
    obstacle1: Math.random() * (600 - 200) + 200,
    obstacle2: Math.random() * (1200 - 600) + 600,
    obstacle3: Math.random() * (1800 - 1200) + 1200,
    obstacle4: Math.random() * (2200 - 1800) + 1800,
    obstacle5: Math.random() * (2800 - 2200) + 2200,
    obstacle6: Math.random() * (3200 - 2800) + 2800,
    obstacle7: Math.random() * (3800 - 3200) + 3200,
    obstacle8: Math.random() * (4200 - 3800) + 3800,
    obstacle9: Math.random() * (4800 - 4200) + 4200,
    obstacle10:Math.random() * (5200 - 4800) + 4800,
};

let worms = {
    worms: {
        worms1: {
            x: obstacle.obstacle1 + 50,
            y: 380
        },
        worms2: {
            x: obstacle.obstacle3 + 50,
            y: 380
        },
        worms3: {
            x: obstacle.obstacle5 + 50,
            y: 380
        },
        worms4: {
            x: obstacle.obstacle7 + 50,
            y: 380
        },
        worms5: {
            x: obstacle.obstacle9 + 50,
            y: 380
        },
    },
};
let wormsImg = new Image()
wormsImg.src = './assets/sprite/caterpillar.gif'

let obstacleImg = new Image()
obstacleImg.src = './assets/sprite/kochka.png'

let moveState = {state: 'stop'};
// СПРАЙТ
let spritePerson = new Image();
spritePerson.src = person.person === 'timon' ? './assets/sprite/tim.png' : './assets/sprite/Pumba.png';
// ФОН
let img = new Image();
let winWidth = window.innerWidth/2 - 80;
img.src ='./assets/bacg.jpg';
// CANVAS
let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");

img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
};
// TIMER
export {
    img, winWidth,
    person,
    canvas, context,
    spritePerson,
    obstacle,
    moveState,
    wormsImg, worms, obstacleImg
};