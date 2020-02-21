import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';

const Formulario = ({crearCita}) => {
    
    // Crear State de Citas
    const [cita, actualizarCita] = useState({
        nombre: '',
        apellido: '',
        fecha: '',
        hora: '',
        descripcion: '',
    });

    const [error,actualizarError] = useState(false);
    
    // Funcion que se ejecuta cuando el usuario escribe en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    }
    
    // Extraer valores
    // siempre hacer un destructurin para tener todas las variables que provienen del state
    const {nombre,apellido,fecha,hora,descripcion} = cita;

    // Cuando el usuario presiona enviar
    const submitCita = e => {
        e.preventDefault();
        
        // Primero siempre validar los datos
        if(nombre.trim() === '' || apellido.trim() === '' || fecha.trim() === '' || hora.trim() === '' || descripcion.trim() === '' ){
            actualizarError(true);
            return;
        }
        
        // Eliminar el mensaje de error
        actualizarError(false);
        // Asignar un ID
        cita.id=uuid();

        // Crear la cita (Colo carla en el state principal)
        crearCita(cita);
    
        // Reiniciar el form
        actualizarCita({
            nombre: '',
            apellido: '',
            fecha: '',
            hora: '',
            descripcion: '',
        });
    }

    return ( 
        <Fragment>
            <h4>Crear Cita</h4>
            <form
                onSubmit={submitCita}
            >
                <label>Nombre</label>
                <input
                    type='text'
                    name='nombre'
                    className='u-full-width'
                    placeholder='Nombre'
                    onChange={actualizarState}
                    value={nombre}
                    />
                <label>Apellido</label>
                <input
                    type='text'
                    name='apellido'
                    className='u-full-width'
                    placeholder='Apellido'
                    onChange={actualizarState}
                    value={apellido}
                    />
                <label>Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={fecha}
                    />
                <label>Hora</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={hora}
                    />
                <label>Diagnostico</label>
                <textarea 
                    className="u-full-width"
                    name='descripcion'
                    value={descripcion}
                    onChange={actualizarState}>
                </textarea>
                {error ? <p className='alerta-error'>Todos los campos son obligatorios</p>:null}
                <button
                    type="submit"
                    className='u-full-width button-primary'
                    value={descripcion}
                >Enviar</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;