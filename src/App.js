import React, {Component} from "react";
import './bootstrap.min.css';
import './index.css';
import Header from "./components/Header";
import NuevaCita from "./components/NuevaCita";

class App extends Component{

    state = {
        citas : []
    };

    crearNuevaCita = (datos) => {
        console.log(datos);

        const citas = [...this.state.citas, datos];
        this.setState({
            citas: citas
        })    

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

            </div>
        );
    }

}

export default App;
