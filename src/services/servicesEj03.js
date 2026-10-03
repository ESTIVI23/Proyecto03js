



export const calcularPreciosConIVA = (listaProductos) => {

    const productosConIVA = listaProductos.map((productoActual) => {
                                            // productoActual es cada uno de los objetos del array 
                                            //y creamos nuevos objetos con el impuesto
        return {
            nombre: productoActual.nombre,
            precioFinal: productoActual.precio * 1.21
        }; // creamos un nuevo objeto con el nombre del producto
           // y su precio final con el iva incluido (precio * 1.21)
    });

    return productosConIVA; // devuelve un nuevo array con los productos 
                            // y sus precios con IVA incluido
};