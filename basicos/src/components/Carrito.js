import React from 'react';
import Producto from './Producto';
import './carrito.css';

const Carrito = ({carrito,agregarProducto}) => (
    <div className='carrito'>
        <h2>Tu carrito de compra</h2>

        { carrito.length === 0 
            ? <p> No hay elementos en tu carrito </p> 
            : carrito.map(producto => (
                <Producto
                    key={producto.id}
                    producto={producto}
                    carrito = {carrito}
                    agregarProducto = {agregarProducto}
                />
                
        ))}
    </div>
)
 
export default Carrito;