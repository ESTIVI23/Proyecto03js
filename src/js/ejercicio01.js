
import { cambiarColor } from "../services/servicesEj01.js";

const boton = document.querySelector("#cambiarColor");

const pagina = document.querySelector("#pagina");




boton.addEventListener("click", () => {
        
  const color = cambiarColor();

    pagina.style.backgroundColor = color;

    console.log("El color de fondo cambió");
});