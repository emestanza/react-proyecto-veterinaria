import React, {Component} from "react";
import './bootstrap.min.css';
import './index.css';
import Header from "./components/Header";
import NuevaCita from "./components/NuevaCita";
import ListaCitas from "./components/ListaCitas";

class App extends Component{

    state = {
        citas : []
    };

    /**
     * Metodo para guardar una nueva cita
     */
    crearNuevaCita = (datos) => {

        const citas = [...this.state.citas, datos];
        this.setState({
            citas: citas
        })    

    };

    /**
     * Elimina una cita
     */
    eliminarCita = (id) => {

        //citas actuales
        const citasActuales = [...this.state.citas]

        //quito el registro del id
        const citas = citasActuales.filter(cita => {
            return cita.id !== id;
        })

        //actualizo state de citas
        this.setState({
            citas: citas
        })

    }

    //MONTO lo que tengo en local storage en state citas para que se listen
    componentDidMount(){

        const citasLs = localStorage.getItem("citas", );
        if (citasLs){
            this.setState({
                citas: JSON.parse(citasLs)
            })
        }

    };

    //actualizo lo que tenga en state de citas en local storage
    componentDidUpdate(){
        localStorage.setItem("citas", JSON.stringify(this.state.citas))
    };

    render(){
        return (
            <div className="container">
              <Header titulo='Administrador Pacientes Veterinania' />
              <div className="row">
                  <div className="col-md-10 mx-auto">
                      <NuevaCita crearNuevaCita ={this.crearNuevaCita} />
                  </div>
              </div>

              <div className="mt-5 col-md-10 mx-auto">
                <ListaCitas 
                    citas={this.state.citas}
                    eliminarCita={this.eliminarCita}
                />
              </div>
            </div>
        );
    }
}

export default App;
