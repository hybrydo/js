'use strict'

// JSON - JavaScript Object Notation

var pelicula = {
    titulo: 'Jurasik world',
    year: 2018,
    pais: 'esp'
};

pelicula.titulo = "Jurasik world el reino caido";



var peliculas = [
  {titulo: "v de vendeta", year: 2011, pais: "holanda"},
  pelicula  
];

console.log(peliculas);

var caja_peliculas = document.querySelector("#peliculas");
var index;
for (index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    
    caja_peliculas.append(p);
}