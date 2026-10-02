import { guardarDatos, mostrarDatos } from "../services/servicesEj02.js";
// con impor traigo las funciones de servicesEj02.js para poder usarlas en este archivo


const formulario = document.querySelector("#formulario");
const contenedorEstudiantes = document.querySelector("#ListaEstudiantes");
// Capturo los elementos del HTML mediante su id 
// para poder trabajar con ellos desde JavaScript.


const listaEstudiantes = [];
// creo un array vacio para guardar los datos de los estudiantes



formulario.addEventListener("submit", (evento) => { 


           evento.preventDefault();// para qe no se carge la pagina


          const textoNombre = formulario.elements["nombre"].value.trim();
          const textoApellido = formulario.elements["apellido"].value.trim();
          const textoDNI = formulario.elements["dni"].value.trim();
         //capturo el texto y apellito en cada atributo  del formulario de html

            listaEstudiantes.push(guardarDatos(textoNombre, textoApellido, textoDNI));
            mostrarDatos(listaEstudiantes, contenedorEstudiantes);
            // llamamos a la cosntante mostarDatos 
            // para que se ejecute la funcion y muestre los datos en el HTML
            // push() agrega el estudiante al array 
            //  mostrarDatos() muestra la lista en el HTML.

            formulario.reset();
            // resetea el formulario para que quede vacio despues de enviar los datos
            //limpia todos los campos del formulario y los deja 
            // como estaban originalmente.
});
