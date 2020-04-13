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
// Вывод имя игрока
document.getElementById('name').innerText = person.name;
// Рандобное расположение пребядствий
let objects = [];

const randoms = () => {
    let random = Math.random() * (4800 - 200) + 200;
    let intRan = +random.toFixed(0);
    if(objects.filter(objects => objects > (intRan - 200) && objects < (intRan + 200)).length){
        randoms()
    } else {
        objects.indexOf(intRan) === -1 ? objects.push(intRan) : randoms()
    }
};

for (let i = 1; i <= 10; i++){
    randoms()
}

// Гиены тоже рандомно
let giens = [
    {
        x: Math.random() * (3800 - 3200) + 3200,
        y: 500
    },
    {
        x: Math.random() * (2800 - 1200) + 1200,
        y: 500
    }
];

// Позиция червяков в зависимости от позиции препядствия на котором он расспологаеться, жесткая привязка
let worms = [
        {
            x: objects[0] + 50,
            y: 380
        },
        {
            x: objects[2] + 50,
            y: 380
        },
        {
            x: objects[5] + 50,
            y: 380
        },
        {
            x: objects[7] + 50,
            y: 380
        },
        {
            x: objects[9] + 50,
            y: 380
        }
];
// Изображение червя
let wormsImg = new Image();
wormsImg.src = '../../assets/sprite/caterpillar.gif';
// Изображение препядствия
let obstacleImg = new Image();
obstacleImg.src = '../../assets/sprite/kochka.png';
// Состояние персонажа
let moveState = {state: 'stop'};
// СПРАЙТ
let spritePerson = new Image();
spritePerson.src = person.person === 'timon' ? '../../assets/sprite/tim.png' : '../../assets/sprite/Pumba.png';
// ФОН
let img = new Image();
let winWidth = window.innerWidth/2 - 80;
img.src ='../../assets/bacg.jpg';
// CANVAS
let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");

// Очень важно определить размер канваса по размеру изображения после загрузки фона ОЧЕНЬ ВАЖНО
img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
};

// Экспорт
export {
    img, winWidth,
    person,
    canvas, context,
    spritePerson,

    objects,

    moveState,
    wormsImg, worms, obstacleImg,
    giens
};
