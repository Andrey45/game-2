let arrey = JSON.parse(localStorage.getItem('server'));

$(document).ready(function () {
   $('#data').html(`${arrey.map((item, index) => {
       return `<tr><td>${index}</td><td>${item.name}</td><td>${item.person}</td><td>${item.result}</td></tr>`
   })}`)
});