
var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();



var textoHora = `
    El año es : ${year}
    El mes es : ${mes + 1}
    el dia es : ${dia}
    La hora es : ${hora}

`

console.log(textoHora);