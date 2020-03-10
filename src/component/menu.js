class Authorization {
    constructor() {
        this.state = {
            name: '',
            person: ''
        }
    }

    personSelect(e){
        this.state.person = e.target.getAttribute('alt');
        document.querySelectorAll('img').forEach(item => item.parentNode.classList.remove('valid'));
        e.currentTarget.classList.add('valid')
    }

    currentValue(e){
        this.state.name = e.target.value;
    }

    auth(){
        let { name, person } = this.state;
        if(name.length && person.length){
            localStorage.setItem('name', name);
            localStorage.setItem('person', person);
            location.href = "cut-scene.html"
        } else {
            document.getElementById('invalid').innerText = 'Введите название игрока и выберите персонажа!';
        }
    }
}

let Auth = new Authorization();
//Изменение имя игрока
document.getElementById('name').oninput = e => Auth.currentValue(e);
//События клика на карточку
document.querySelectorAll('.card').forEach(item => item.addEventListener("click", e => Auth.personSelect(e)));
//Событие клика на кнопку начать
document.querySelector('.button').addEventListener("click", e => Auth.auth());