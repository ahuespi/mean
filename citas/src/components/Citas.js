import React, {Fragment} from 'react';

const Citas = ({cita,eliminarCita}) => {
    const {nombre,apellido,fecha,hora,descripcion,id} = cita;
    return (
        <Fragment>
            <div className='cita u-full-width'>
                    <p>Nombre: <span>{nombre}</span></p>
                    <p>Apellido: <span>{apellido}</span></p>
                    <p>Fecha: <span>{fecha}</span></p>
                    <p>Hora: <span>{hora}</span></p>
                    <p>Diagnostico: <span>{descripcion}</span></p>
                    <button
                        className="button eliminar"
                        onClick={() => eliminarCita(id)}
                    >Eliminar &times;</button>
            </div>
        </Fragment> 

     );
}
 
export default Citas;