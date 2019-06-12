import React, {Fragment} from "react";

//stateless component
// al iniciar el function component con parametro, este recogera los props que vengan de la declaración 
// principal del o los componentes

const Header = (props) =>{
    return (
        <Fragment>
        <header>
            <h1 class="text-center">{props.titulo}</h1>
        </header>
        </Fragment>
    );
}

export default Header