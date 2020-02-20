# mern

Test edit from vim

HTML:
    Es la estructura de la web

    Las <etiquetas> pueden tener atributos
        Atributos="valor" => Propiedades

    Una pagina web debe tener 
    Un <head> y un <body>
    
CSS: 
    Estilos de la pagina



React:
    Es una libreria (Front end) JS para crear UI para appWeb (Corre del lado del cliente)
    Ordenar el proyecto por componentes
        Componentes: Header - Nav - Content - Sidebar - List- Fotter
    ES6+ (classes, template string, modules, funciones, objetos)


# Javascript

    Variables
        Antes  :    
            VAR = 'Te permite reescribir la variable'
        Actual :    
            LET = 'Se puede reescribir' | (Para variables dentro de una funcion)
            CONST = 'Siempre debe tener un valor de inicio y no se puede reescribir'
    
    Scope
        Alcance en el que esta la variable.

    Webpack:
        Es un bundler (Paquete) de modulos para aplicaciones JS modernas
        Webpack procesa la aplicacion y mapea todas las dependencias de un modulo cre 


# REACT
    node_modules
        Es donde se instalan las dependencias
    src:
        es donde vamos a poner todos los componentes de la app 
        RenderDOM.render (que va a mostrar, donde lo va a mostrar)

        COMPONENTES:
            Cada vez que se crea un nuevo componente se pone lo siguiente
            function Header() {
                return (
                    Todo lo que hay adentro del return es lo que se va a ver en la pantalla
                )
            }
            <Component /> En el App.js
        
        Fragment
            Reemplaza los div para no crear div y elementos extras

        Return
            * No se recomienda usar if adentro este, sino un ternario
    
    Los archivos principales son APP.js e index.js
    El serviceWorkes sirve para que tu app sirva sin inet

    * ¿Como fluyen los datos entre los componentes?
        En react va a fluir desde el componente principal (App) hacia los componentes internos
        Los datos fluyen del padre a los hijos (Herencia)

    * REACK HOOKS
        Te permiten actualizar el State sin necesidad de crear un Class Component
        La cantidad de codigo es menor
    
        HOOK: 
            USESTATE
                import React, { useState } from 'react';
            Esta funcion al extraer sus valores, cuenta con 2 partes 
            const [clientes, guardarClientes] = useState([])
            clientes = Tiene el state actual
            guardarclientes = cambia el state


            STATE:
                * Es lo mas importante que hay en react
                * En el state vas a colocar lo que va a reaccionar a las acciones del usuario
                * Sirve para controlar que esta pasando
                * El state no se tiene que modificar directamente por asignacion sino por medio de una funcion
                

            BENEFICIOS ed los HOOKS
                Menor cantidad de codigo
                Mayor facilidad de implementar reducers, administrar states and context

            HOOKS 
                Basicos (100% de proyectos)
                    useState
                    useEffect

                Avanzados (tal vez en algun proyecto):
                    useContext
                    useRef
                    useReducer
                    useCallback
                    useMemo



        .forEach() => Solo recorre
        .map() => Recorre y RETORNA
        {productos.map(producto=>(
        <Producto
            key={producto.id} SIEMPRE PASARLE EL KEY
            producto={producto}
        />
        Pasar un arreglo con ciertos datos hacia un componente que se puede reutilizar multiples veces