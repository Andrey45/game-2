let arrey;
// Выбераем данные о результате
let datas = localStorage.getItem('server');
// Добавляем игрока
$.ajax({
    type: 'POST',
    url: '/api/index.php',
    contentType : 'application/json',
    data: datas
});
// Выбераем результат
$.ajax({
    type: 'GET',
    url: '/api/index.php',
    contentType : 'application/json',
    success : function(result) {
        arrey = result;
        $(document).ready(function () {
            $('#data').html(`${arrey.leaders.map((item, index) => {
                return `<tr><td>${index + 1}</td><td>${item.name}</td><td>${item.score}</td></tr>`
            })}`)
        });
    }
});
// Ресстарт
$('#restart').click(()=>{
    location.href = '../../index.html'
});
