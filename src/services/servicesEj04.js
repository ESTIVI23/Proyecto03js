




export const filtrarPeliculas = (listaPeliculas, generoSeleccionado) => {


    if (generoSeleccionado === "todos") {
        return listaPeliculas;
    }

                                                // le damos el nombre a cada pelicula 
                                                // cada pelicula se llama pelicula.
    const peliculasFiltradas = listaPeliculas.filter((pelicula) => {
                                    //filter pregunta que pelucula cumple con la condicion

    return pelicula.genero === generoSeleccionado;});



    return peliculasFiltradas;
};