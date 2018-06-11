'use strict'

// Localstorage 

// Comprobar si el navegador soporta la caracteristica LocalStorage

if (typeof(Storage) !== 'undefined'){
    console.log("localstorage disponible");
}else{
    console.log("localstorage no disponible en tu navegador");
}

// Guardar datos en LocalStorage

localStorage.setItem("TITULO", "las tortugas ninjas");

// Recuperar datos de LocalStorage

document.querySelector("#peliculas").innerHTML = localStorage.getItem("TITULO");

// Guardar objetos en LocalStogare

var usuario = {
    nombre: "iban",
    email: "prueba@github.com",
    web: "github@hybrydo.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto convertido a string previamente

var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos").append(userjs.web + " " + userjs.nombre);

//localStorage.removeItem(usuario);

localStorage.clear();