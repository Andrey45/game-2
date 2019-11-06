import {person} from './constants.js'
import { finish } from '../main.js'
import {giena} from "./constants.js";
(function(){

    const secs = document.getElementById('time');
    const hp = document.getElementById('hp');
    const score = document.getElementById('score')
    let S = '00', M = '00';

    setInterval(function(){
        // Чтобы небыло больше 100 хп
        if (person.hp > 100){
            person.hp = 100
        }
        // Если меньше или равно то финишь
        if(person.hp === 0){
            finish()
        }

        // Колличество гусениц
        score.innerText = person.glass;
        // Каждую секунду минус 1 хп
        person.hp -= 1;

        hp.innerText = person.hp;

        S = +S +1;
        //Если результат меньше 10, прибавляем впереди строку '0'
        if( S < 10 ) { S = '0' + S; }
        if( S === 60 ) {
            S = '00';
            //Как только секунд стало 60, добавляем +1 к минутам
            M = +M + 1;
            //Дальше то же самое, что и для секунд
            if( M < 10 ) { M = '0' + M; }
            if( M === 60 ) {
                //Как только минут стало 60, добавляем +1 к часам.
                M = '00';
            }
        }
        //Время игры
        person.time += 1;
        secs.innerText = M+':'+S
        //Тикает всё через одну функцию, раз в секунду.
    },1000);

})();