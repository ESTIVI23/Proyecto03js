





import { calcularTotal } from "../services/servicesEj05.js";

const total = document.querySelector("#total");
const boton = document.querySelector("#btnTotal");
const detalle = document.querySelector("#detalle");


const carrito = [
    { producto: "Notebook", precio: 800000, enStock: true },
    { producto: "Mouse", precio: 15000, enStock: false },
    { producto: "Teclado", precio: 30000, enStock: true },
    { producto: "Monitor", precio: 200000, enStock: true }
];

boton.addEventListener("click", () => {

    const resultado = calcularTotal(carrito);

    total.innerHTML = `Total: $${resultado}`;

    const cantidadProductos = carrito.filter((producto) => {
        return producto.enStock === true;
    }).length;

    detalle.innerHTML = `Se compraron ${cantidadProductos} productos`;

});