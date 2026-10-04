
import { filtrarPeliculas } from "../services/servicesEj04.js";

const filtroGenero = document.querySelector("#filtroGenero");
const boton = document.querySelector("#btnFiltrar");
const listaPeliculas = document.querySelector("#listaPeliculas");


const peliculas = [
    { titulo: "Rápidos y Furiosos", genero: "Acción", puntaje: 8 },
    { titulo: "Son como niños", genero: "Comedia", puntaje: 6 },
    { titulo: "El Padrino", genero: "Drama", puntaje: 10 },
    { titulo: "Jhon Wick", genero: "Acción", puntaje: 9 }
];

boton.addEventListener("click", () => {

    const generoSeleccionado = filtroGenero.value;

    const peliculasFiltradas = filtrarPeliculas(peliculas,generoSeleccionado);

   
   
    listaPeliculas.innerHTML = "";
    // Limpiamos la lista antes de mostrar el nuevo género




    peliculasFiltradas.forEach((pelicula) => {  

        listaPeliculas.innerHTML += `
            <li>${pelicula.titulo} - ${pelicula.genero} -
             ${pelicula.puntaje}</li>
        `;

    });

});

