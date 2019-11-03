let arrey = JSON.parse(localStorage.getItem('server'));
console.log(arrey)
$(document).ready(function () {
   $('#data').html(`${arrey.map(item => {
       return `<tr><td>${item.name}</td><td>${item.person}</td><td>${item.result}</td></tr>`
   })}`)
});