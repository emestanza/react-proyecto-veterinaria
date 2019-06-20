import React, {Component} from "react";
import uuid from 'uuid';

/**
 * State inicial, objeto importante para trabajar con el componente, ya que se compondra de una serie
 * de objetos los cuales se actualizaran durante el ciclo de vida del componente
 */
const stateInicial = { 
    cita : {
        mascota : '',
        propietario : '',
        fecha : '',
        hora : '',
        sintomas : ''
    }, 
    error: false
 }

class NuevaCita extends Component{

    //inicializando el state
    state = {
        ...stateInicial
    };

    /**
     * Maneja el evento change de todo el formulario de nueva visita
     */
    handleChange = (e) => {
        
        this.setState({
            cita: {
                ...this.state.cita, // coloca todo el objeto cita
                [e.target.name]: e.target.value // sobreescribe el valor del atributo que este siendo cambiado
            }
        })
    };

    /**
     * Maneja el submit del formulario
     */
    hadleSubmit = (e)=>{

        e.preventDefault();

        //obtengo los campos del form, this.state.cita tiene todos los valores actuales
        const {mascota,  propietario, fecha, hora, sintomas} = this.state.cita; 

        if (mascota === '' || propietario === '' ||fecha === '' ||hora === '' ||sintomas === '' ){
            this.setState({
                error: true
            })

            return
        }

        //UUID
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();

        //invoco a crearNuevaCita a traves de sus props <NuevaCita crearNuevaCita ={this.crearNuevaCita} />
        this.props.crearNuevaCita(nuevaCita);

        //reseteo el form a traves del stateInicial
        this.setState({
            ...stateInicial
        })
    }

    render(){

        const{error} = this.state;

        return (
            <div className="card mt-5 py-5">
                <div className="card-body">

                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>

                    {error ? <div className="alert alert-danger">Todos los campos son obligatorios</div> : null}

                    <form onSubmit={this.hadleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    id="mascota"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                    onChange = {this.handleChange}
                                    value = {this.state.cita.mascota}
                                    />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Dueño Mascota"
                                    name="propietario"
                                    onChange = {this.handleChange}
                                    value = {this.state.cita.propietario}
                                />
                            </div>
                        </div> {/* form-group */}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange = {this.handleChange}
                                    value = {this.state.cita.fecha}/>
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="hora"
                                    onChange = {this.handleChange}
                                    value = {this.state.cita.hora}
                                    
                                />
                            </div>
                        </div> {/* form-group */}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Síntomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea 
                                    className="form-control"
                                    name="sintomas"
                                    placeholder="Describe los Sintomas"
                                    onChange = {this.handleChange}
                                    value = {this.state.cita.sintomas}
                                ></textarea>
                            </div>
                        </div> {/* form-group */}
                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar Nueva Cita" />
                    </form>
                </div>
            </div>
        );
    }
}

export default NuevaCita;