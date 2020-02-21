import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import Citas from './components/Citas';


function App() {
  
  const [citas, guardarCitas] = useState([]);

  // Leer la nueva cita con la que ya tenemos

  const crearCita = cita => { guardarCitas([...citas,cita]); };

  // Funcion que elimina una cita por su id
  
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  };
  
  return (
    <Fragment>
      <h1>administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita = {crearCita}
            />
          </div>
          <div className="one-half column">
          <h4>Turnos</h4>
          {citas.map(cita=>(
            <Citas 
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
            />

          ))}
          </div>

        </div>
      </div>
    </Fragment>
  );
}

export default App;
