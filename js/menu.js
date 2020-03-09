class Authorization {
    constructor() {
        this.state = {
            name: '',
            person: ''
        }
    }

    personSelect(e){
        this.state.person = e.target.getAttribute('alt');
        $('img').parent('.card').removeClass('valid');
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
let input = document.getElementById('name');

input.oninput = e => Auth.currentValue(e);
//События клика
$('.card').click(e => Auth.personSelect(e));
$('button').click(e => Auth.auth());