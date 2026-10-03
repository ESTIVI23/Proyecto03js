


import { calcularPreciosConIVA } from "../services/servicesEj03.js";


const boton = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");




const productos = [
    { nombre: "Coca", precio: 1000 },
    { nombre: "Pan", precio: 500 },
    { nombre: "Leche", precio: 1200 }
];


boton.addEventListener("click", () => {

    const listaFinal = calcularPreciosConIVA(productos);
    // Llamamos a la función que está en services
    // y le pasamos el array de productos para que trabaje con él.

    
   resultado.innerHTML = listaFinal.map((productoConIVA) =>
                                       // productoConIVA es cada uno de los objetos del array que
                                       //  viene de la función calcularPreciosConIVA
                                       
    `<p>${productoConIVA.nombre}: $${productoConIVA.precioFinal}</p>`
).join(""); // muesta cada objeto del array en un párrafo y lo une en un solo string para mostrarlo en el HTML
});

