



export const calcularTotal = (carrito) => {
                            //carrito arry origiginal de js 
    const productosEnStock = carrito.filter((producto) => {  
                                    //filter recorre los prductos
        return producto.enStock === true; // condicion qe cumple el producto en stock 
            //productosEnStoc es el nuevo arry
            
            
    });



                  //productosEnStock  nuestro nuevo array con los 3 productos.
    const precios = productosEnStock.map((producto) => { // producto es el nuevo array de productos en stock 
                                //map()  recorre esos productos.


    return producto.precio;

});

const total = precios.reduce((acumulador, precio) => {
    return acumulador + precio;
}, 0);

return total;



};