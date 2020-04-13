import { moveProses } from './main.js'

import { person, spritePerson, winWidth, objects, worms, giens } from '../../constants/constants.js'
// Переменные действия прыжка. бега. подземлю
let jumpLength = 280;
let moveGamp = false;
let movePersonRight = false;
let movePersonLeft = false;
let moveDovn = false;
// Функция для определения действия
export function move() {
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowLeft':
                // Если бежим влево то задаем значение спрайта в зависимости от персонажа и стафим флажек бега в лево
                movePersonLeft = true;
                spritePerson.src = person.person === 'timon' ? '../../assets/sprite/moveLeft.png' : '../../assets/sprite/moveLeftPumba.png';
                moveProses('left');
                break;
            case 'ArrowRight' :
                // Тоже самое что и с бегом в лево
                movePersonRight = true;
                spritePerson.src = person.person === 'timon' ? '../../assets/sprite/moveRight.png' : '../../assets/sprite/moveRightPumba.png';
                moveProses('right');
                break;
            case 'ArrowUp' :
                // Прыжок, флажок прыжка
                moveGamp = true;
                break;
            case 'ArrowDown' :
                // Тоже самое что и с прыжком
                moveDovn = true;
                break
        }
    })
}
// Ловим момент отпускания клавиши
document.addEventListener('keyup', (event)=> {
    if (event.key === 'ArrowLeft'){
        // если отпустили отменяем флаг и стоячий спрайт в зависимости от персонажа
        moveProses('up');
        spritePerson.src = person.person === 'timon' ? '../../assets/sprite/tim.png' : '../../assets/sprite/Pumba.png';
        movePersonLeft = false
    }
    if (event.key === 'ArrowRight'){
        // если отпустили отменяем флаг и стоячий спрайт в зависимости от персонажа
        moveProses('up');
        spritePerson.src = person.person === 'timon' ? '../../assets/sprite/tim.png' : '../../assets/sprite/Pumba.png';
        movePersonRight = false
    }
});
// Состояния для гиены
let gienaStart = giens[0].x;
let gienaLeft = true;
let gienaRight = false;

// Движения гиен
function moveGiena() {
    // Если бежит в лево
    if (gienaLeft){
        // Если пробегает больше чем на 500 пикселей от стартовой пазиццы то бежим в обратную сторану
        if (giens[0].x < gienaStart - 500 && giens[1].x < gienaStart - 500){
            gienaRight = true;
            gienaLeft = false;
        }else {
            //  движение
            giens[0].x -= 1;
            giens[1].x -= 1;
        }
    }
    // Ели бежит в право
    if (gienaRight){
        // Если пробегает больше чем на 500 пикселей от стартовой пазиццы то бежим в обратную сторану
        if (giens[0].x > gienaStart + 500 && giens[1].x > gienaStart + 500){
            gienaRight = false;
            gienaLeft = true;
        } else {
            //  движение
            giens[0].x += 1;
            giens[1].x += 1;
        }
    }
}
// Постоянная функция движения
function draw() {
    moveGiena();
    // Если флаг движения влево
    if(movePersonLeft) {
        // Проверяем что игрок не подземлей
        if(!moveDovn){
            // Если позиция бельше 0 пикселей то убавляем еще
            if (person.x > 0){
                // При окончании прыжка возвращаем прежнюю позицию персонажа
                if (!moveGamp){
                    person.y  = 400;
                }
                person.x -= 1;
            }
        }
    }
    // Движение в право, все идентично
    if(movePersonRight) {
        if(!moveDovn){
            if (!moveGamp){
                person.y  = 400;
            }
            person.x += 1;
        }
    }
    // Прыжек
    if(moveGamp){
        // Если мы подземлей то просто возвращаем персонажа на экран
        if(moveDovn){
            person.y = 400;
            moveDovn = false;
            moveGamp = false;
        } else {
            // если не подземлей то имитируем прыжек до того момента как он не достигнет максимальной высоты прыжка
            person.y -= 2;
            if (person.y < jumpLength) {
                person.y  = 400;
                moveGamp = false;
            }
        }
    }
    objects.map(item => {
        if(person.x > item - 100 && person.x < item + 50 && person.y < 380){
            moveGamp = false;
            person.y = 280
        }
    });

    worms.map(item => {
        if (person.x > item.x - 100 && person.x < item.x + 50  && person.y < item.y){
            moveGamp = false;
            person.y = 280;
            person.hp += person.hp < 100 ? 5 : 0;
            person.glass += 1;
            item.y = -800
        }
    });
    // при клике под землю опускаем персонажа
    if(moveDovn){
        person.y = 800
    }
}
// Выполняем вункцию каждые 5 милисекунды
setInterval(draw, 5);
