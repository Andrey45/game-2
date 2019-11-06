let person = '';

$(document).ready(function () {

    $('#timon_card').click(function () {
        person === '' || person === 'pumba'  ? person = 'timon' : '';
        $('#timon_card').addClass('valid');
        $('#pumba_card').removeClass('valid');
    });

    $('#pumba_card').click(function () {
        person === '' || person === 'timon' ? person = 'pumba' : '';
        $('#pumba_card').addClass('valid');
        $('#timon_card').removeClass('valid');
    });

    $('#but').click(function () {
        // Проверяем введено ли имя игрок
        if(document.getElementById('name').value !== ''){
            localStorage.setItem('name', document.getElementById('name').value);
            // Если да то проверяем выбран ли персонаж
            if(person !== ''){
                // Если выбран то идем дальше
                localStorage.setItem('person', person);
                location.href = "cut-scene.html"
            }
            // Если нет то кидаем ошибку
            else {
                $('#invalid_person').text('Персонаж не выбран!!')
            }
        }
        // Если ент кидаем ошибку
        else {
            $('#name').addClass('error')
        }
    })
});