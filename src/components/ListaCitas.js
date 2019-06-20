import React from "react";
import Cita from './Cita';

//stateless component
// al iniciar el function component con parametro, este recogera los props que vengan de la declaración 
// principal del o los componentes

const ListaCitas = ({citas, eliminarCita}) =>{
    
    const mensaje = Object.keys(citas).length === 0?'No hay citas registradas':"Lista de Citas"

    //en Cita se coloca un key para diferenciar cada elemento que se listara, sino se coloca, dara error
    return ( 
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="text-center">{mensaje}</h2>
                <div className="lista-citas">
                    {citas.map(cita => (
                        <Cita 
                            key={cita.id} 
                            cita={cita}
                            eliminarCita = {eliminarCita}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListaCitas;