import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {
    
    const {nombre, precio, id} = producto;
    
    // Agregar producto al carrito
    const seleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id);
        agregarProducto([
            ...carrito,
            ...producto 
        ]);
    };
    
    // Eliminar producto del carrito
        const eliminarProducto = id => {
            const productos = carrito.filter(producto => producto.id !== id);
            agregarProducto(productos);
        };
    


    return (
        <div id={id}>
            <h1>{nombre}</h1>
            <p>${precio}</p>
            
            { productos ? (<button type='button' onClick={ () => seleccionarProducto(id) } >Comprar</button>)
                        : (<button type='button' onClick={ () => eliminarProducto(id) } >Eliminar</button>) }
        </div>
    );
}
 
export default Producto;