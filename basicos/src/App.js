import React, {Fragment,useState, Profiler} from 'react';
import Header from './components/Header';
import Fotter from './components/Fotter';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  // Listado de productos
  const [ productos, guardarProductos ] = useState([
    { id:1, nombre:'Camisa ReactJS', precio: 50 },
    { id:2, nombre:'Camisa AngularJS', precio: 40 },
    { id:3, nombre:'Camisa VueJS', precio: 50 },
    { id:4, nombre:'Camisa SvelteJS', precio: 20 },

  ]);

  // State para un carrito de compras
  const [carrito, agregarProducto] = useState([]); // Con los corchetes el state empieza vacio

  // Obtener Fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header title='Tiendas Virtual'/>
      <h1>Lista de Productos</h1>
      {productos.map(producto=>(
        <Producto
          // STATES
          key = { producto.id }
          producto = { producto }
          productos = { productos }
          carrito = { carrito }
          // Funciones
          agregarProducto = { agregarProducto }
        />
      ))}
      
      <Carrito 
        carrito={carrito}
        agregarProducto={agregarProducto}
      />
      <Fotter fecha={fecha}/>
    </Fragment>
  );
}

export default App;
